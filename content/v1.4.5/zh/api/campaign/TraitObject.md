---
title: "TraitObject"
description: "TraitObject 的自动生成类参考。"
---
# TraitObject

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class TraitObject : PropertyObject`
**Base:** `PropertyObject`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/TraitObject.cs`

## 概述

`TraitObject` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MinValue` | `public int MinValue { get; }` |
| `MaxValue` | `public int MaxValue { get; }` |
| `IsHidden` | `public bool IsHidden { get; }` |

## 主要方法

### Initialize
`public void Initialize(TextObject name, TextObject description, bool isHidden, int minValue, int maxValue)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 TraitObject 实例
TraitObject traitObject = ...;
traitObject.Initialize(name, description, false, 0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TraitObject traitObject = ...;
traitObject.Initialize(name, description, false, 0, 0);
```

## 参见

- [本区域目录](../)