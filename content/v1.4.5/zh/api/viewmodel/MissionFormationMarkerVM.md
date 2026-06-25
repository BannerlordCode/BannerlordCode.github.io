---
title: "MissionFormationMarkerVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionFormationMarkerVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionFormationMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFormationMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker/MissionFormationMarkerVM.cs`

## 概述

`MissionFormationMarkerVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsFormationTargetRelevant` | `public bool IsFormationTargetRelevant { get; set; }` |
| `ShowDistanceTexts` | `public bool ShowDistanceTexts { get; set; }` |
| `Targets` | `public MBBindingList<MissionFormationMarkerTargetVM> Targets { get; set; }` |

## 主要方法

### Compare
`public int Compare(MissionFormationMarkerTargetVM x, MissionFormationMarkerTargetVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### RefreshFormationMarkers
`public void RefreshFormationMarkers()`

**用途 / Purpose:** 刷新 `formation markers` 的显示或缓存。

## 使用示例

```csharp
var value = new MissionFormationMarkerVM();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)