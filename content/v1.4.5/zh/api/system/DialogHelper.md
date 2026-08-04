---
title: "DialogHelper"
description: "DialogHelper 是战役对话文本变量的单一桥接入口，把当前一对一角色匹配到 GameText 并写入 MBTextManager。"
---
# DialogHelper

**命名空间:** `Helpers`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public static class DialogHelper`  
**基类:** 无  
**源文件:** `bin/TaleWorlds.CampaignSystem/Helpers/DialogHelper.cs`

## 一句话职责

它用当前战役对话管理器和 `CharacterObject.OneToOneConversationCharacter` 查找匹配文本，把结果写入指定的全局文本变量，从而让后续对话行读取正确的本地化内容。

## 心智模型

`DialogHelper` 不创建对话、也不选择对话角色。调用者传入一个文本变量名和 `gameTextId`；helper 从 `Campaign.Current.ConversationManager` 按当前一对一角色查找 `TextObject`，再通过 `MBTextManager.SetTextVariable` 写入变量表。真正消费变量的是对话系统和文本模板，helper 只负责这一小段上下文桥接。

它必须运行在已有对话上下文内：没有活动 Campaign、没有当前一对一角色或找不到匹配文本时，结果可能为空。不要把它当成通用的本地化加载器，也不要在对话之外缓存由它设置的全局变量。

## 何时使用，何时不要用

- 在对话 consequence 或条件已经确定当前角色后，使用 `SetDialogString` 为下一段文本准备变量。
- 让 `gameTextId` 指向已注册的 GameText，并使用模板实际引用的变量名。
- 不要在 `Campaign.Current` 或 `CharacterObject.OneToOneConversationCharacter` 尚未建立时调用；不要用它代替 `ConversationManager` 的角色匹配。
- 若需要给特定 `TextObject` 设置角色、聚落或效果变量，应使用 [StringHelpers](../StringHelpers) 或直接对父文本设置变量。

## 依赖关系

```text
Campaign.Current.ConversationManager
  -> FindMatchingTextOrNull(gameTextId, OneToOneConversationCharacter)
  -> MBTextManager.SetTextVariable(stringVariable, TextObject)
  -> conversation text template
```

- 对话上下文：[Campaign](../../campaign/Campaign) · [ConversationSentence](../../campaign/ConversationSentence)。
- 文本对象：[TextObject](../../localization/TextObject)；角色来源：[CharacterObject](../../campaign/CharacterObject)。
- 同域变量工具：[StringHelpers](../StringHelpers)，负责更丰富的角色和聚落变量组装。

## 公开成员

| 成员 | 用途与调用时机 |
|---|---|
| `SetDialogString(string stringVariable, string gameTextId)` | 在当前一对一角色上下文中查找匹配 GameText，并把返回的 `TextObject` 写入 `MBTextManager` 的变量表；它不返回文本，也不改变对话状态。 |

## 真实示例

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;

if (Campaign.Current != null && CharacterObject.OneToOneConversationCharacter != null)
{
    DialogHelper.SetDialogString("MEETING_RESULT", "str_meeting_result");
}
```

这段代码只适合已经进入一对一对话的 consequence。`str_meeting_result` 必须是当前版本已注册并能按角色匹配的文本 ID，`MEETING_RESULT` 必须与对话模板中的变量名一致。

## 风险与存档边界

- 方法内部没有 null 保护；对话上下文不存在时可能把空文本写入变量系统，甚至让后续文本展开失败。
- `stringVariable` 是全局文本变量名。重复使用通用名字会污染同一对话流程中的后续文本；使用模块独有的命名约定。
- 该写入是瞬时 UI/对话状态，不是 Campaign 存档字段。不要把文本变量当作可恢复游戏数据。
- GameText ID 和角色匹配规则属于本地化/对话数据；替换对话时必须同时验证模板变量和 `ConversationManager` 上下文。

## 版本注记

v1.4.5 的实现仍明确使用当前一对一角色来调用 `FindMatchingTextOrNull`，然后写入 `MBTextManager`；它不会根据 `gameTextId` 自行创建或注册 GameText。

## 导航

- [↑ API 系统索引](../)
- [↔ StringHelpers](../StringHelpers)
- [相关：ConversationSentence](../../campaign/ConversationSentence)
- [相关：TextObject](../../localization/TextObject)
