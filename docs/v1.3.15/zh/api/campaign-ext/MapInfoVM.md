<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapInfoVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapInfoVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapInfoVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoVM.cs`

## 概述

`MapInfoVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInfoBarExtended` | `public bool IsInfoBarExtended { get; set; }` |
| `IsInfoBarEnabled` | `public bool IsInfoBarEnabled { get; set; }` |
| `ExtendHint` | `public HintViewModel ExtendHint { get; set; }` |
| `PrimaryInfoItems` | `public MBBindingList<MapInfoItemVM> PrimaryInfoItems { get; set; }` |
| `SecondaryInfoItems` | `public MBBindingList<MapInfoItemVM> SecondaryInfoItems { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Tick
`public void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

## 使用示例

```csharp
var value = new MapInfoVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)