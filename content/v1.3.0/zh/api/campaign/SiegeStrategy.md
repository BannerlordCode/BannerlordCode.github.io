---
title: "SiegeStrategy"
description: "SiegeStrategy 的自动生成类参考。"
---
# SiegeStrategy

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeStrategy : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Siege/SiegeStrategy.cs`

## 概述

`SiegeStrategy` 位于 `TaleWorlds.CampaignSystem.Siege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Siege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<SiegeStrategy> All { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |

## 主要方法

### Initialize
`public void Initialize(TextObject name, TextObject description)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SiegeStrategy 实例
SiegeStrategy siegeStrategy = ...;
siegeStrategy.Initialize(name, description);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SiegeStrategy siegeStrategy = ...;
siegeStrategy.Initialize(name, description);
```

## 参见

- [本区域目录](../)