---
title: "PolicyObject"
description: "PolicyObject 的自动生成类参考。"
---
# PolicyObject

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PolicyObject : PropertyObject`
**Base:** `PropertyObject`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/PolicyObject.cs`

## 概述

`PolicyObject` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SecondaryEffects` | `public TextObject SecondaryEffects { get; }` |
| `AuthoritarianWeight` | `public float AuthoritarianWeight { get; }` |
| `OligarchicWeight` | `public float OligarchicWeight { get; }` |
| `EgalitarianWeight` | `public float EgalitarianWeight { get; }` |
| `LogEntryDescription` | `public TextObject LogEntryDescription { get; }` |

## 主要方法

### Initialize
`public void Initialize(TextObject name, TextObject description, TextObject logEntryDescription, TextObject secondaryEffects, float authoritarianWeight, float oligarchyWeight, float egalitarianWeight)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PolicyObject 实例
PolicyObject policyObject = ...;
policyObject.Initialize(name, description, logEntryDescription, secondaryEffects, 0, 0, 0);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 PolicyObject 实例
PolicyObject policyObject = ...;
var result = policyObject.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PolicyObject policyObject = ...;
policyObject.Initialize(name, description, logEntryDescription, secondaryEffects, 0, 0, 0);
```

## 参见

- [本区域目录](../)