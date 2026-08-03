---
title: "Party 家族"
description: "Party 所有权、名册、军团组成与世界地图移动边界。"
---

# Party 家族

**一句话职责：** Party 类型把战役实体连接到世界地图上的兵员、物品、移动和军团成员关系。

## 心智模型与阅读顺序

先读 [PartyBase](../../campaign/PartyBase)、[MobileParty](../../campaign/MobileParty) 与 [Army](../Army)，再读可变数据容器 [TroopRoster](../TroopRoster) 与 [ItemRoster](../ItemRoster)。

## 何时使用

查询或协调地图参与者时使用 Party API；所有权、招募、销毁等变更使用 Action。不要在遍历实时 Party 时改名册，也不要在销毁事件后缓存旧实例。

## 依赖关系

- 上游：[Settlement](../../campaign/Settlement)、Hero、PartyComponent 与 Campaign Behaviors。
- 下游：[MapEvents](../mapevents)、Models、Encounter Menus 与存档。
- 同级：[Settlements](../settlements)、[Actions](../actions)。

## 最小真实入口

```csharp
MobileParty party = MobileParty.MainParty;
TroopRoster roster = party.MemberRoster;
```

从战役状态解析实时 Party，并检查销毁/空引用状态。

## 风险边界

名册变化会影响工资、速度、士气和存档体积。使用名册支持的方法，让 Party/Army Action 更新派生缓存。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Settlements](../settlements) · [MapEvents](../mapevents)
- [相关：Actions](../actions)
