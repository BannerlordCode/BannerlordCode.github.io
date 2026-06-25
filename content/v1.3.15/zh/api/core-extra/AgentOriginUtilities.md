---
title: "AgentOriginUtilities"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentOriginUtilities`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentOriginUtilities

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public class AgentOriginUtilities`
**领域:** core-extra

## 概述

`AgentOriginUtilities` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetDefaultTraitsMask
`public static TroopTraitsMask GetDefaultTraitsMask(IAgentOriginBase origin)`

**用途 / Purpose:** 获取 `default traits mask` 的当前值。

### GetDefaultTroopTraits
`public static void GetDefaultTroopTraits(BasicCharacterObject troop, out bool hasThrownWeapon, out bool hasSpear, out bool hasShield, out bool hasHeavyArmor)`

**用途 / Purpose:** 获取 `default troop traits` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
AgentOriginUtilities.GetDefaultTraitsMask(origin);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
