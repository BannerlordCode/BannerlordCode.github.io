---
title: Campaign 战役 (v1.3.0)
description: v1.3.0 战役系统核心类
---

# Campaign 战役 (v1.3.0)

## 心智模型

先把 `Campaign 战役` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。

v1.3.0 战役系统核心类。完整文档见 [v1.3.15 Campaign](../../../../v1.3.15/zh/api/campaign/)。

## 类 / Classes

| 类 | 描述 |
|----|------|
| [MobileParty](./MobileParty) | 地图上移动的队伍（领主/商队/农民） |
| [PartyBase](./PartyBase) | MobileParty 与 BanditParty 等的公共基类 |
