<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSiegeWeapon`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeWeapon

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public class MissionSiegeWeapon : IMissionSiegeWeapon`
**Base:** `IMissionSiegeWeapon`
**领域:** core-extra

## 概述

`MissionSiegeWeapon` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; }` |
| `Type` | `public SiegeEngineType Type { get; }` |
| `Health` | `public float Health { get; }` |
| `InitialHealth` | `public float InitialHealth { get; }` |
| `MaxHealth` | `public float MaxHealth { get; }` |

## 主要方法

### CreateDefaultWeapon
`public static MissionSiegeWeapon CreateDefaultWeapon(SiegeEngineType type)`

**用途 / Purpose:** 创建一个 `default weapon` 实例或对象。

### CreateCampaignWeapon
`public static MissionSiegeWeapon CreateCampaignWeapon(SiegeEngineType type, int index, float health, float maxHealth)`

**用途 / Purpose:** 创建一个 `campaign weapon` 实例或对象。

### SetHealth
`public void SetHealth(float health)`

**用途 / Purpose:** 设置 `health` 的值或状态。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MissionSiegeWeapon.CreateDefaultWeapon(type);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
