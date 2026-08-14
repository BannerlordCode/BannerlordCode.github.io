---
title: "ConversationItemVM"
description: "ConversationItemVM 的自动生成类参考。"
---
# ConversationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationItemVM.cs`

## 概述

`ConversationItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PersuasionItem` | `public PersuasionOptionVM PersuasionItem { get; set; }` |
| `HasPersuasion` | `public bool HasPersuasion { get; set; }` |
| `IconType` | `public int IconType { get; set; }` |
| `OptionHint` | `public HintViewModel OptionHint { get; set; }` |
| `ItemText` | `public string ItemText { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsSpecial` | `public bool IsSpecial { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ConversationItemVM 实例
ConversationItemVM conversationItemVM = ...;
conversationItemVM.RefreshValues();
```

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** 执行 action 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ConversationItemVM 实例
ConversationItemVM conversationItemVM = ...;
conversationItemVM.ExecuteAction();
```

### SetCurrentAnswer
`public void SetCurrentAnswer()`

**用途 / Purpose:** 为 current answer 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ConversationItemVM 实例
ConversationItemVM conversationItemVM = ...;
conversationItemVM.SetCurrentAnswer();
```

### ResetCurrentAnswer
`public void ResetCurrentAnswer()`

**用途 / Purpose:** 将 current answer 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 ConversationItemVM 实例
ConversationItemVM conversationItemVM = ...;
conversationItemVM.ResetCurrentAnswer();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ConversationItemVM conversationItemVM = ...;
conversationItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)