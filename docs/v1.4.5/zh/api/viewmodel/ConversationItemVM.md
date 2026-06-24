<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Conversation/ConversationItemVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** 执行 `action` 操作或流程。

### SetCurrentAnswer
`public void SetCurrentAnswer()`

**用途 / Purpose:** 设置 `current answer` 的值或状态。

### ResetCurrentAnswer
`public void ResetCurrentAnswer()`

**用途 / Purpose:** 将 `current answer` 重置为初始状态。

## 使用示例

```csharp
var value = new ConversationItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)