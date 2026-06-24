<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapSiegePOIVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapSiegePOIVM

**Namespace:** SandBox.ViewModelCollection.MapSiege
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapSiegePOIVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.MapSiege/MapSiegePOIVM.cs`

## 概述

`MapSiegePOIVM` 位于 `SandBox.ViewModelCollection.MapSiege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.MapSiege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public POIType Type { get; }` |
| `MachineIndex` | `public int MachineIndex { get; }` |
| `Machine` | `public SiegeEngineConstructionProgress Machine { get; }` |
| `MapSceneLocationFrame` | `public MatrixFrame MapSceneLocationFrame { get; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `SidePrimaryColor` | `public Color SidePrimaryColor { get; set; }` |
| `SideSecondaryColor` | `public Color SideSecondaryColor { get; set; }` |
| `QueueIndex` | `public int QueueIndex { get; set; }` |
| `MachineType` | `public int MachineType { get; set; }` |
| `CurrentHitpoints` | `public float CurrentHitpoints { get; set; }` |
| `MaxHitpoints` | `public float MaxHitpoints { get; set; }` |
| `IsPlayerSidePOI` | `public bool IsPlayerSidePOI { get; set; }` |
| `IsFireVersion` | `public bool IsFireVersion { get; set; }` |
| `IsInVisibleRange` | `public bool IsInVisibleRange { get; set; }` |
| `IsConstructing` | `public bool IsConstructing { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasItem` | `public bool HasItem { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |

## 主要方法

### ExecuteSelection
`public void ExecuteSelection()`

**用途 / Purpose:** 执行 `selection` 操作或流程。

### UpdateProperties
`public void UpdateProperties()`

**用途 / Purpose:** 更新 `properties` 的状态或数据。

### RefreshDistanceValue
`public void RefreshDistanceValue(float newDistance)`

**用途 / Purpose:** 刷新 `distance value` 的显示或缓存。

### RefreshPosition
`public void RefreshPosition()`

**用途 / Purpose:** 刷新 `position` 的显示或缓存。

### RefreshBinding
`public void RefreshBinding()`

**用途 / Purpose:** 刷新 `binding` 的显示或缓存。

### ExecuteShowTooltip
`public void ExecuteShowTooltip()`

**用途 / Purpose:** 执行 `show tooltip` 操作或流程。

### ExecuteHideTooltip
`public void ExecuteHideTooltip()`

**用途 / Purpose:** 执行 `hide tooltip` 操作或流程。

## 使用示例

```csharp
var value = new MapSiegePOIVM();
value.ExecuteSelection();
```

## 参见

- [完整类目录](../catalog)