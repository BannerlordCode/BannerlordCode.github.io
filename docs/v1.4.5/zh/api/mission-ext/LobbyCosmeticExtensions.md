<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LobbyCosmeticExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LobbyCosmeticExtensions

**命名空间:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class LobbyCosmeticExtensions`
**领域:** mission-ext

## 概述

`LobbyCosmeticExtensions` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ToItemTypeEnum
`public static ItemTypeEnum ToItemTypeEnum(this MPArmoryCosmeticsVM.ClothingCategory cosmeticCategory)`

**用途 / Purpose:** 处理 `to item type enum` 相关逻辑。

### GetCosmeticEquipmentIndex
`public static EquipmentIndex GetCosmeticEquipmentIndex(this ItemObject itemObject)`

**用途 / Purpose:** 获取 `cosmetic equipment index` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
LobbyCosmeticExtensions.ToItemTypeEnum(cosmeticCategory);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
