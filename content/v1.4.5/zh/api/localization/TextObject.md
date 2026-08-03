---
title: "TextObject：本地化模板、变量与延迟渲染"
description: "从文本键或原始模板创建 TextObject，附加局部变量，并在当前语言上下文中由 MBTextManager 解析为最终显示字符串。涵盖缓存、存档、嵌套变量、链接标记和 UI/Campaign 使用边界。"
---

# TextObject：本地化模板、变量与延迟渲染

**Namespace:** `TaleWorlds.Localization`  
**Module:** `TaleWorlds.Localization`  
**Type:** `public class TextObject`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.Localization/TaleWorlds.Localization/TextObject.cs`

## 概述

**一句话职责：**保存一个本地化键或原始文本模板及其局部变量，等需要显示时，按当前活动语言和文本语法解析成字符串。

`TextObject` 不是已经翻译好的 `string`，也不是全局文本表的替代品。它是跨 Campaign、Gauntlet ViewModel 和提示文本传递的延迟渲染载体：模板可含 `{=id}` 键、`{NAME}` 变量、条件和语法标记；调用 `ToString()` 才会让当前语言的翻译、变量和语法处理器共同决定屏幕上的文字。

## ↑ Parent

- [Localization](../)

## ↔ Sibling

- [MBTextManager](../MBTextManager)
- [TextProcessingContext](../TextProcessingContext)
- [TextGrammarProcessor](../TextGrammarProcessor)
- [LocalizedTextManager](../LocalizedTextManager)

## Related

- [Army](../../campaign/Army) - Campaign 中返回带变量状态文本的真实调用方
- [TextProcessor token model](../MBTextToken) - 模板在当前语言中被分词后的运行时数据

## 依赖关系

`TextObject` 把原始 `Value` 和局部 `Attributes` 交给 [MBTextManager](../MBTextManager) 取得当前语言文本并执行渲染；其变量搜索、嵌套展开与语法上下文由 [TextProcessingContext](../TextProcessingContext) 协调，模板的运行时分词结果则对应 [MBTextToken](../MBTextToken)。这些都是显示路径依赖，不应由业务代码绕过并手工拼接最终字符串。

## 心智模型：模板数据在前，显示字符串在后

把一次显示看成以下生命周期：

```text
键 / 原始 Value + Attributes 局部变量
        -> MBTextManager.GetLocalizedText(Value)
        -> 当前语言的 token 缓存与 TextProcessor 语法解析
        -> 语言处理器（复数、性别等）
        -> 最终 string
```

1. 构造函数把传入的文本放入 `Value`。它可以是原始值，也可以以前缀 `{=文本ID}` 指向翻译表；此时仍未完成显示。
2. `SetTextVariable` 把字符串、数字或另一个 `TextObject` 放进该对象自己的 `Attributes`。局部变量优先于文本处理上下文的同名全局变量。
3. `ToString()` 取得当前活动语言下的文本，解析模板与嵌套变量，再由该语言处理器完成语法变形；因此同一对象切换语言后可得到不同结果。
4. 缓存的是当前语言的**模板 token**，不是最终字符串。`cachedTextLanguageId` 与活动语言不同时，内部会重新本地化并分词。

这使 `TextObject` 适合把“待显示的意义”从业务层交给 UI；不适合把一次显示结果当成会自动随语言、变量或游戏状态更新的 `string`。

## 何时用，何时不要用

**适用：**

- 文本需要在 UI 刷新时按玩家当前语言显示，或需要 `{HERO_NAME}`、`{COUNT}`、条件、复数等模板语法。
- 业务 API 需要返回文本意义而不是立即显示，例如 Army 状态、禁用原因、提示和 VM 的 `HintText`。
- 一个模板要在不同变量下重复渲染。先 `CopyTextObject()`，再给副本设置变量，避免污染共享模板。

**不要用：**

- 只需要固定、不可本地化的内部键或日志数据时；直接使用明确的 `string`，不要依赖 `ToString()` 的语言上下文。
- 需要在语言切换后稳定保存的显示结果时；保存键/模板和业务数据，重新建立 `TextObject` 并在显示时渲染。
- 想设置整个文本处理器的跨对象全局变量时；那是 [MBTextManager](../MBTextManager) 的 `SetTextVariable` / `ClearAll` 上下文，而不是本对象的 `Attributes`。全局状态会影响随后同一上下文的处理，局部变量通常更安全。

## 真实调用点

### Campaign：Army 把战役对象名称作为局部变量返回

`TaleWorlds.CampaignSystem/Army.cs` 的 `GetBehaviorText` 在军团围城时创建模板，并把 `LeaderParty.BesiegedSettlement.Name` 放进 `TARGET_SETTLEMENT`；调用者可继续持有这个 `TextObject`，由最终 UI 决定何时转成字符串。

```csharp
TextObject behaviorText = new TextObject("{=JTxI3sW2}Besieging {TARGET_SETTLEMENT}.");
behaviorText.SetTextVariable("TARGET_SETTLEMENT", LeaderParty.BesiegedSettlement.Name);
return behaviorText;
```

这不是字符串拼接：`Settlement.Name` 本身也是可本地化文本对象，嵌套对象可在同一轮解析中展开。应先确认 `BesiegedSettlement` 不为 `null`；源方法只在围城分支中执行这段代码。

### Gauntlet ViewModel：复制共享模板后填入本帧数值

`CampaignOptionData.cs` 先复制 `GameTexts.FindText("str_string_newline_string")` 的结果，再填入两段文本并立刻渲染。复制很关键，因为 `SetTextVariable` 修改的是接收者。

```csharp
TextObject combinedText = GameTexts.FindText("str_string_newline_string").CopyTextObject();
combinedText.SetTextVariable("STR1", text);
combinedText.SetTextVariable("STR2", campaignOptionDisableStatus.Value.DisabledReason);
text = combinedText.ToString();
```

另一个 UI 实例是 `ClanFinanceWorkshopItemVM.RefreshStoragePercentages`：它反复为同一模板设置 `NUMBER` 为 0、25、50、75、100，每次 `ToString()` 后将结果交给不同的 selector item。这个模式只在模板是 VM 私有实例时安全；若来自 `GameTexts.FindText`，应先复制。

## 状态、存档与缓存

| 成员 | 用途与时机 | 副作用和边界 |
|---|---|---|
| `Value` | 原始模板或带 ID 的文本键；构造时设置，也可由旧代码直接读取或改写。 | 标记为 `SaveableField(1)`，会进入存档。它不是当前语言的显示字符串；在当前语言中直接改写后，已有 token 缓存不会因赋值自动失效。应新建对象，或在确实需要时调用 `CacheTokens()`。 |
| `Attributes` | 通过 `SetTextVariable` 保存本对象变量；也可读取字典检查已绑定的键。 | 标记为 `SaveableProperty(2)`，字典及其值必须是存档系统能处理的类型。字典可变，直接改它等同于修改模板实例；不要把短生命周期 UI 对象或不受 SaveSystem 支持的对象塞入长期保存的文本。 |
| `Length` | 需要判断原始模板是否含字符时读取。 | 返回 `Value?.Length ?? 0`，不计算翻译、变量替换、富文本标记或最终显示宽度。 |
| `IsLink` | UI 需要识别百科链接文本时读取。 | 仅当 `Value` 以精确前缀 `"{=!}{.link}"` 开头才为真；它不解析渲染后的文本，也不会验证链接变量是否已设置。 |
| `GetEmpty()` / `IsEmpty()` / `IsNullOrEmpty()` | 返回或判断“无文本”哨兵；在交给 UI、拼装可选描述前使用。 | `GetEmpty()` 的 `Value` 和 `Attributes` 都是 `null`。`IsEmpty()` 只有在 `Value` 为空且属性为 `null` 或空字典时才为真；带变量但没有模板的对象不算空。静态方法同时处理 `null` 引用。 |
| `GetDepth(maxDepth)` | 在将嵌套 `TextObject` 交给递归语法处理前，估计 `Attributes` 中的嵌套深度。 | 只遍历属性值里的 `TextObject`，并以 `maxDepth` 截断；它仅跳过直接指向自身的项，不能把它当作任意循环引用的完整检测器。 |

### 存档行为与语言切换

`Value` 与 `Attributes` 是可保存状态；`cachedTokens` 与 `cachedTextLanguageId` 标为 `CachedData`，不应被视为可保存或可跨会话复用的显示结果。读档时 `OnLoad` 会重新分配内部 ID。语言切换后，内部取 token 时会比较活动语言索引并重新分词，但已经由旧语言 `ToString()` 生成并存入 ViewModel 的普通 `string` 不会自行刷新，VM 必须走自己的 `RefreshValues`/刷新路径重新渲染。

直接修改 `Value` 是额外风险：缓存键只比较语言，不比较 `Value`。同一语言中复用对象而又改模板，可能继续解析旧 token。公共 API 允许这种写法不等于它是安全的模板更新策略。

## 变量、渲染与识别成员

| 成员 | 用途与时机 | 副作用和边界 |
|---|---|---|
| `SetTextVariable(tag, TextObject|string|float|int)` | 给 `{TAG}` 绑定局部值；可链式调用，适合构建提示、状态和选项文本。 | 首次调用会创建 `Attributes`，同名键会被覆盖。`float` 重整为指定小数位后存入字典。传入另一个 `TextObject` 会产生嵌套解析，而非立刻冻结成字符串。 |
| `GetVariableValue(tag, out variable)` | TextProcessor 查找父文本局部变量时使用；诊断自定义模板的绑定也可使用。 | 支持的值会转换为 `TextObject`；字符串、`int`、`float` 和 `TextObject` 是源码明确处理的类型，其他对象可能得到 `null`。只有转换出的 `TextObject.Value == ""` 且 `Attributes != null` 时，方法才以同一个 tag 继续递归查找；`Value == null` 不满足该条件，会直接返回 `true`。循环或异常嵌套应在设计时避免。 |
| `CacheTokens()` | 已知模板稳定、又将立即频繁渲染时预热当前语言 token。 | 覆盖当前缓存及语言 ID。通常无需手动调用，内部首次解析会懒加载；它不会计算最终字符串，也不会替你使 UI 上已存的字符串更新。 |
| `ToString()` | 正常交给 UI、tooltip 或日志前的最后一步。 | 调用 `MBTextManager.ProcessTextToString(this, true)`：本地化、解析语法并清除语言处理器临时数据。异常不会向外抛出，而是打印调试信息并返回包含 ID 与活动语言的错误字符串，因此测试时不要把错误显示误判为正常翻译。 |
| `ToStringWithoutClear()` | 仅在同一文本处理序列还需要保留语言处理器临时数据时使用；TextProcessingContext 用它来继续解析变量。 | 使用同一处理流程但不清理临时语言数据。普通 UI 显示不应以它替代 `ToString()`，否则临时语法状态可能泄漏到后续处理。 |
| `AddIDToValue(id)` / `GetID()` | 前者为未带键的原始 `Value` 补 `{=id}` 前缀；后者在诊断、调试或显示错误文本时取出该 ID。 | `AddIDToValue` 直接改写可存档 `Value`，并且仅在模板未以 `{=` 开头且文本不含该 ID 时生效；不要用于已有键或正在被共享/缓存的模板。`GetID()` 只读取开头的 `{=...}`，原始文本返回空字符串。 |
| `CopyTextObject()` | 从 `GameTexts.FindText` 或长期模板创建可独立填变量的工作副本。 | 复制字典容器，但不深拷贝其中的嵌套对象；token 列表和缓存语言 ID 也会被带到副本。随后改嵌套 `TextObject` 仍可能影响两边。 |
| `Equals(TextObject)` / `Equals(object)` | 需要比较模板值和属性时使用。 | 先比较 `Value`，再比较同一属性字典或其枚举序列；它不是“当前显示相同”的比较。`GetHashCode()` 使用内部 ID 而非上述结构内容，因此不要把可相等的 `TextObject` 当作 `Dictionary`/`HashSet` 的稳定内容键。 |

`Format(float)` 是旧式快捷入口：它把格式化后的值写入全局 `MBTextManager` 变量 `A0`，再新建只含同一 `Value` 的对象渲染。它不会复制本对象的 `Attributes`，也引入全局上下文副作用；对新代码，显式的 `SetTextVariable` 更可预测。

## 失败边界与排查顺序

1. 变量未显示时，先检查模板中的 tag 与 `SetTextVariable` 的大小写是否一致，再检查是否在 `ToString()` 之前绑定。缺少变量时 TextProcessingContext 会生成错误文本，而不是神奇地从业务对象推断值。
2. 嵌套模板递归异常时，检查 `Attributes` 是否形成 A -> B -> A 等间接循环；`GetDepth` 不能可靠消除这种循环。
3. 文本切换语言后仍是旧语言时，确认 UI 缓存的是不是 `string`；重新构建/刷新 VM 的显示字段，不要期望旧字符串随 `MBTextManager.ActiveTextLanguage` 改变。
4. 共享模板的字样串台时，检查是否直接在 `GameTexts.FindText` 的返回值上调用了 `SetTextVariable`。在有多个消费者的路径上使用 `CopyTextObject()`。
5. 出现 `Error at id:` 时，到 debug 输出查看被 `ToString` 捕获的原始异常，并核对该语言下的翻译文本和模板语法；该 API 的吞异常行为会掩盖正常调用栈。

## 使用准则

把 `TextObject` 留在业务与 UI 的边界上，尽量晚地调用 `ToString()`。业务层返回模板及数据，ViewModel 在刷新时填变量并渲染；这样同一意义可按当前语言、语法规则和最新业务数据重新生成，且不会把本地化结果错误地写回存档状态。
