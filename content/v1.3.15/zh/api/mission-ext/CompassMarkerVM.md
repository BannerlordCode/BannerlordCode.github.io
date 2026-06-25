---
title: "CompassMarkerVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CompassMarkerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CompassMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompassMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassMarkerVM.cs`

## 概述

`CompassMarkerVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Angle` | `public float Angle { get; }` |
| `IsPrimary` | `public bool IsPrimary { get; set; }` |
| `Text` | `public string Text { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `Position` | `public float Position { get; set; }` |
| `FullPosition` | `public float FullPosition { get; set; }` |

## 主要方法

### Refresh
`public void Refresh(float circleX, float x, float distance)`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

## 使用示例

```csharp
var value = new CompassMarkerVM();
value.Refresh(0, 0, 0);
```

## 参见

- [完整类目录](../catalog)