---
title: "VisualCreator"
description: "VisualCreator 的自动生成类参考。"
---
# VisualCreator

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VisualCreator`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/VisualCreator.cs`

## 概述

`VisualCreator` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapEventVisualCreator` | `public IMapEventVisualCreator MapEventVisualCreator { get; set; }` |

## 主要方法

### CreateMapEventVisual
`public IMapEventVisual CreateMapEventVisual(MapEvent mapEvent)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 map event visual 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 VisualCreator 实例
VisualCreator visualCreator = ...;
var result = visualCreator.CreateMapEventVisual(mapEvent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VisualCreator visualCreator = ...;
visualCreator.CreateMapEventVisual(mapEvent);
```

## 参见

- [本区域目录](../)