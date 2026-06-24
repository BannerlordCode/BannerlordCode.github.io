<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponComponentViewExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WeaponComponentViewExtensions

**命名空间:** TaleWorlds.MountAndBlade.View
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class WeaponComponentViewExtensions`
**领域:** mission-ext

## 概述

`WeaponComponentViewExtensions` 位于 `TaleWorlds.MountAndBlade.View`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先准备该类型需要的上下文，然后直接调用静态入口
WeaponComponentViewExtensions.GetFlyingMeshCopy(weaponComponentData, item);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
