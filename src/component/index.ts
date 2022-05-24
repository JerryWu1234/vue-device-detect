import type { DefineComponent } from 'vue'
import { defineComponent, h } from 'vue'
import * as checklist from '../select'

interface View {
  tagName: keyof HTMLElementTagNameMap
}

function createComponent(key: string, value: boolean) {
  const name = key.substring(2)
  return defineComponent({
    name: `${name}View`,
    props: {
      tagName: {
        type: String,
        default: 'div',
      },
    },
    setup(props, ctx) {
      return () => {
        const slot = ctx.slots.default?.()
        return value
          ? h(props.tagName, null, {
            default: () => slot,
          })
          : null
      }
    },
  }) as DefineComponent<View>
}

const list: Record<string, DefineComponent<View>> = {}
for (const key in checklist) {
  if (key.startsWith('is'))
    list[key] = createComponent(key, (checklist as Record<string, any>)[key])
}

export default list
