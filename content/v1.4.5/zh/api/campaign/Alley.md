---
title: "Alley"
description: "Alley 的自动生成类参考。"
---
# Alley

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Alley : SettlementArea`
**Base:** `SettlementArea`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/Alley.cs`

## 概述

`Alley` 位于 `TaleWorlds.CampaignSystem.Settlements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `State` | `public AreaState State { get; }` |

## 主要方法

### SetOwner
`public void SetOwner(Hero newOwner)`

**用途 / Purpose:** **用途 / Purpose:** 为 owner 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Alley 实例
Alley alley = ...;
alley.SetOwner(newOwner);
```

### Initialize
`public void Initialize(Settlement settlement, string tag, TextObject name)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Alley 实例
Alley alley = ...;
alley.Initialize(settlement, "example", name);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Alley alley = ...;
alley.SetOwner(newOwner);
```

## 参见

- [本区域目录](../)