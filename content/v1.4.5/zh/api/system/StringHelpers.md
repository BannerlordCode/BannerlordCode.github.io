---
title: "StringHelpers"
description: "StringHelpers 是 Bannerlord 文本变量和字符串规范化工具，负责把 CharacterObject、Settlement 与效果数值写入 TextObject 或对话重复行。"
---
# StringHelpers

**命名空间:** `Helpers`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public static class StringHelpers`  
**基类:** 无  
**源文件:** `bin/TaleWorlds.CampaignSystem/Helpers/StringHelpers.cs`

## 一句话职责

它把角色、聚落和效果增量转换成文本模板所需的变量对象，同时提供 CamelCase、snake_case 和去重音规范化；这些方法主要改变瞬时文本状态，不改变战役实体本身。

## 心智模型

`StringHelpers` 有两条边界。`SplitCamelCase`、`CamelCaseToSnakeCase` 和 `RemoveDiacritics` 是纯字符串转换；`SetCharacterProperties`、`SetSettlementProperties`、`SetRepeatableCharacterProperties` 与 `SetEffectIncrementTypeTextVariable` 则会写入父 `TextObject`、`MBTextManager` 或当前 `ConversationSentence.SelectedRepeatLine`。同一个 tag 在不同目标上有不同寿命，不能只看返回的 `TextObject` 就忽略写入位置。

角色属性组会包含 `NAME`、`GENDER`、`LINK`，Hero 还可按 `includeDetails` 加入 `FIRSTNAME`、`AGE`、`FACTION` 和 `CLAN`；聚落属性组写入 `NAME` 和 `LINK`。这些值来自调用时的对象快照，文本变量不会替调用方保持对象引用或存档关系。

## 何时使用，何时不要用

- 用 `SetCharacterProperties` 或 `SetSettlementProperties` 为本地化文本构造可复用的变量组，并优先传入父 `TextObject` 以限制变量作用域。
- 在重复对话行的处理函数中才使用 `SetRepeatableCharacterProperties` 或 `isRepeatable: true` 的聚落方法，因为它们写入 `ConversationSentence.SelectedRepeatLine`。
- 用 `SetEffectIncrementTypeTextVariable` 显示加法或倍率效果；`AddFactor` 会把 bonus 乘以 100 后格式化。
- 不要把文本变量当作存档字段，也不要在 `SelectedRepeatLine` 为空时调用重复行入口；世界状态变更应走实体或 Action API。

## 依赖关系

```text
CharacterObject / Settlement
  -> StringHelpers property builders
  -> TextObject / MBTextManager / ConversationSentence.SelectedRepeatLine
  -> localized dialogue, notifications, encyclopedia text
```

- 输入实体：[CharacterObject](../../campaign/CharacterObject)、[Hero](../../campaign/Hero) 和 [Settlement](../../campaign/Settlement)。
- 文本目标：[TextObject](../../localization/TextObject) 与 [ConversationSentence](../../campaign/ConversationSentence)。
- 对话入口：[DialogHelper](../DialogHelper)；它负责找文本，`StringHelpers` 负责填变量。

## 公开成员

| 成员 | 用途与副作用 |
|---|---|
| `SplitCamelCase` | 在小写到大写或词首大写边界插入空格；只返回新字符串。 |
| `CamelCaseToSnakeCase` | 把 CamelCase 和数字边界转成小写下划线形式；只返回新字符串。 |
| `SetSettlementProperties` | 创建含 `NAME`、`LINK` 的聚落变量组，写入父文本、全局文本管理器或重复对话行。 |
| `SetRepeatableCharacterProperties` | 用角色变量组写入 `ConversationSentence.SelectedRepeatLine`；只适合重复行上下文。 |
| `SetCharacterProperties` | 创建角色变量组并写入父文本或 `MBTextManager`，同时返回该变量 `TextObject`。 |
| `SetEffectIncrementTypeTextVariable` | 把 `bonus` 按 `EffectIncrementType` 转成带正负号的文本变量；倍率效果显示百分数值。 |
| `RemoveDiacritics` | 用 Unicode 分解移除非间隔标记，再规范化回 Form C；常用于搜索比较，不适合替换显示原文。 |

## 真实示例

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Localization;

Hero hero = Hero.MainHero;
TextObject notification = new TextObject("{=helper_example}Welcome, {HERO.NAME}.");
StringHelpers.SetCharacterProperties("HERO", hero.CharacterObject, notification, includeDetails: true);
```

这里把变量写入局部 `notification`，因此 `{HERO.NAME}` 等占位符只服务于这个 `TextObject`。若改为省略 `parent`，源码会写入 `MBTextManager` 的全局变量表，生命周期和污染风险都不同。

## 风险与存档边界

- `parent` 为空时，角色或聚落变量会进入全局 `MBTextManager`；复用通用 tag 可能污染后续通知或对话。
- `SetRepeatableCharacterProperties` 和 `isRepeatable: true` 要求当前重复行已经建立；脱离对话流程会访问无效的 `SelectedRepeatLine`。
- `includeDetails` 会读取 Hero 的派系、Clan 和年龄。对象被注销、未注册或处于加载中时不要把这些结果缓存成持久数据。
- `RemoveDiacritics` 只用于比较/搜索，显示文本仍应保留原始本地化字符串；它不改变 `TextObject` 或角色名称。

## 版本注记

v1.4.5 的 `SetEffectIncrementTypeTextVariable` 对 `EffectIncrementType.AddFactor` 使用百分数格式，而其他类型直接显示 bonus；不要在调用方再次乘 100。

## 导航

- [↑ API 系统索引](../)
- [↔ DialogHelper](../DialogHelper)
- [相关：TextObject](../../localization/TextObject)
- [相关：CharacterObject](../../campaign/CharacterObject)
