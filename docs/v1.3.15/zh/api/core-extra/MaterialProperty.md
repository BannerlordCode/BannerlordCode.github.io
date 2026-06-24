<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MaterialProperty`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MaterialProperty

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public struct MaterialProperty`
**领域:** core-extra

## 概述

`MaterialProperty` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Monster` | `public Monster Monster { get; }` |
| `Maneuver` | `public int Maneuver { get; }` |
| `ChargeDamage` | `public int ChargeDamage { get; }` |
| `Speed` | `public int Speed { get; }` |
| `BodyLength` | `public int BodyLength { get; }` |
| `HitPoints` | `public int HitPoints { get; }` |
| `HitPointBonus` | `public int HitPointBonus { get; }` |
| `IsRideable` | `public bool IsRideable { get; }` |
| `IsPackAnimal` | `public bool IsPackAnimal { get; }` |
| `IsMount` | `public bool IsMount { get; }` |
| `IsLiveStock` | `public bool IsLiveStock { get; }` |
| `HorseMaterialNames` | `public MBReadOnlyList<HorseComponent.MaterialProperty> HorseMaterialNames { get; }` |
| `MeatCount` | `public int MeatCount { get; }` |
| `HideCount` | `public int HideCount { get; }` |
| `SkeletonScale` | `public SkeletonScale SkeletonScale { get; }` |
| `Name` | `public string Name { get; }` |

## 主要方法

### GetCopy
`public override ItemComponent GetCopy()`

**用途 / Purpose:** 获取 `copy` 的当前值。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 MaterialProperty 实例，再调用它的公开方法
var value = new MaterialProperty();
value.GetCopy();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
