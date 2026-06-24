<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponComponentViewExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WeaponComponentViewExtensions

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class WeaponComponentViewExtensions`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/WeaponComponentViewExtensions.cs`

## 概述

`WeaponComponentViewExtensions` 位于 `TaleWorlds.MountAndBlade.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetFlyingMeshCopy
`public static MetaMesh GetFlyingMeshCopy(this WeaponComponentData weaponComponentData, ItemObject item)`

**用途 / Purpose:** 获取 `flying mesh copy` 的当前值。

### GetFlyingMeshIfExists
`public static MetaMesh GetFlyingMeshIfExists(this WeaponComponentData weaponComponentData, ItemObject item)`

**用途 / Purpose:** 获取 `flying mesh if exists` 的当前值。

## 使用示例

```csharp
WeaponComponentViewExtensions.GetFlyingMeshCopy(weaponComponentData, item);
```

## 参见

- [完整类目录](../catalog)