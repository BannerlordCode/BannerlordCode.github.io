<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameMenuPlunderItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuPlunderItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuPlunderItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuPlunderItemVM.cs`

## 概述

`GameMenuPlunderItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Visual` | `public ItemImageIdentifierVM Visual { get; set; }` |
| `Amount` | `public int Amount { get; set; }` |

## 主要方法

### ExecuteBeginTooltip
`public void ExecuteBeginTooltip()`

**用途 / Purpose:** 执行 `begin tooltip` 操作或流程。

### ExecuteEndTooltip
`public void ExecuteEndTooltip()`

**用途 / Purpose:** 执行 `end tooltip` 操作或流程。

## 使用示例

```csharp
var value = new GameMenuPlunderItemVM();
value.ExecuteBeginTooltip();
```

## 参见

- [完整类目录](../catalog)