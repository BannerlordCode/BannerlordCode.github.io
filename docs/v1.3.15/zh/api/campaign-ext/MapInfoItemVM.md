<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapInfoItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapInfoItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapInfoItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoItemVM.cs`

## 概述

`MapInfoItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasWarning` | `public bool HasWarning { get; set; }` |
| `IntValue` | `public int IntValue { get; set; }` |
| `FloatValue` | `public float FloatValue { get; set; }` |
| `VisualId` | `public string VisualId { get; set; }` |
| `Value` | `public string Value { get; set; }` |

## 主要方法

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**用途 / Purpose:** 执行 `begin hint` 操作或流程。

### ExecuteEndHint
`public void ExecuteEndHint()`

**用途 / Purpose:** 执行 `end hint` 操作或流程。

### SetOverriddenVisualId
`public void SetOverriddenVisualId(string visualId)`

**用途 / Purpose:** 设置 `overridden visual id` 的值或状态。

## 使用示例

```csharp
var value = new MapInfoItemVM();
value.ExecuteBeginHint();
```

## 参见

- [完整类目录](../catalog)