---
title: "Settlements 家族"
description: "Settlement、Town、Village、Workshop 的所有权、经济与安全变更边界。"
---

# Settlements 家族

**一句话职责：** Settlement API 暴露战役地图上的城镇、村庄、工坊与所有权关系，变化数值由 Models 计算。

## 心智模型与阅读顺序

先读 [Settlement](../../campaign/Settlement)、[Town](../../campaign/Town)、[Village](../../campaign/Village)，再对照 [Workshop](../../campaign/Workshop) 和据点经济 Models，最后使用对应所有权 Action。

## 何时使用

实体用于身份和当前状态；每日计算交给 Model，所有权或状态变更交给 Action。不要直接设置忠诚、安全、繁荣字段来模拟每日 tick。

## 依赖关系

- 上游：[MobileParty](../../campaign/MobileParty)、Clans、Kingdoms 与 MapEvents。
- 下游：据点菜单、驻军、经济 Models、通知与存档。
- 同级：[Party](../party)、[Actions](../actions)、[Models](../models)。

## 最小真实入口

```csharp
Settlement settlement = Settlement.Find("town_1");
Town town = settlement.Town;
```

使用引擎对象身份解析，并在访问 Town/Village 前检查空值。

## 风险边界

据点变更会扩散到 Clan、Kingdom、驻军和经济系统。所有者变更走对应 Action，每日 Model 保持只读。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Party](../party) · [Models](../models)
- [相关：MapEvents](../mapevents)
