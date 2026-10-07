---
title: "DialogHelper"
description: "对话文本变量的一行包装：把一句对话文本按当前对话对象解析后写进 MBTextManager 的文本变量。"
---

# DialogHelper

**命名空间：** `Helpers`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public static class DialogHelper`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Helpers/DialogHelper.cs`（声明见第 8 行）

## 概述

本类是「把一句对话文本按当前对话对象解析后写进一个文本变量」的一行包装。真源有三层：文本 id → `ConversationManager.FindMatchingTextOrNull`（会按对话角色做匹配）→ `MBTextManager` 的文本变量。它自己不持有状态，整个方法体只有一行。

## 心智模型

把 DialogHelper 想成对话系统的「变量填充器」：`MBTextManager` 维护一套文本变量表，本类负责把一句对话文本按**当前正在一对一对话的角色**解析后写进这套表。关键设计决策是绑定 `CharacterObject.OneToOneConversationCharacter`——这意味着本 helper **只在对话进行中可用**，在对话外调用拿到的是错的人（或 null）。它存在的意义是让 mod 开发者不必手写 `Campaign.Current.ConversationManager.FindMatchingTextOrNull` 这一长串调用。

## 何时使用 / 何时不要使用

**何时使用：**
- 要在对话中设置一个文本变量供后续对话句子引用时，用 `SetDialogString("myText", "str_my_dialog")`。
- 本方法只在对话进行中可用——在对话外调用会拿到错的人或 null。

**何时不要使用：**
- 不要在对话外调用——它绑定的是 `CharacterObject.OneToOneConversationCharacter`，在对话外拿到的是错的人或 null。
- 不要期望它做 null 检查——`Campaign.Current` 为 null（不在战役里）直接 NRE。
- 不要期望它返回有内容的文本——`FindMatchingTextOrNull` 可能返回 null。

## 成员说明

| 成员 | 用途、副作用与时机 |
|------|-------------------|
| `public static void SetDialogString(string stringVariable, string gameTextId)` | 整个方法体只有一行：`MBTextManager.SetTextVariable(stringVariable, Campaign.Current.ConversationManager.FindMatchingTextOrNull(gameTextId, CharacterObject.OneToOneConversationCharacter), false)`。只在对话进行中可用。`DialogHelper.cs:11` |

## 示例

```csharp
// 把一句对话文本按当前对话对象解析后写进文本变量
DialogHelper.SetDialogString("myText", "str_my_dialog");
// 在对话外调用会拿到错的人或 null
string result = Campaign.Current.ConversationManager.FindMatchingTextOrNull("str_my_dialog", CharacterObject.OneToOneConversationCharacter);
Debug.Print($"result = {result}");
```

## 风险与边界

- **没有任何 null 检查**——`Campaign.Current` 为 null（不在战役里）直接 NRE。
- `FindMatchingTextOrNull` 名字里带 `OrNull`，**可能返回 null**。
- 它绑定的是 `CharacterObject.OneToOneConversationCharacter`（**当前正在一对一对话的角色**）⇒ 这个 helper **只在对话进行中可用**，在对话外调用拿到的是错的人（或 null）。

## 依赖关系

- 上游 / 提供者：
  - [Campaign](../../campaign/Campaign) —— `Campaign.Current.ConversationManager` 是查找对话文本的入口。
  - [CampaignGameStarter](../../campaign/CampaignGameStarter) —— 对话行本身是在注册期挂进对话系统的。

## 参见

- ↑ 父级：[core-extra 索引](../)
- ↔ 相关：[EquipmentHelper](../EquipmentHelper) · [CraftingHelper](../CraftingHelper)
