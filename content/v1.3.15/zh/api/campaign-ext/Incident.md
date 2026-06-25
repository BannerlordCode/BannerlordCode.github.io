---
title: "Incident"
description: "Incident 的自动生成类参考。"
---
# Incident

**Namespace:** TaleWorlds.CampaignSystem.Incidents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Incident : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Incidents/Incident.cs`

## 概述

`Incident` 位于 `TaleWorlds.CampaignSystem.Incidents`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Incidents` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public TextObject Title { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `Trigger` | `public IncidentsCampaignBehaviour.IncidentTrigger Trigger { get; }` |
| `Type` | `public IncidentsCampaignBehaviour.IncidentType Type { get; }` |
| `Cooldown` | `public CampaignTime Cooldown { get; }` |
| `NumOfOptions` | `public int NumOfOptions { get; }` |
| `Effects` | `public IReadOnlyList<IncidentEffect> Effects { get; }` |

## 主要方法

### Initialize
`public void Initialize(string title, string description, IncidentsCampaignBehaviour.IncidentTrigger trigger, IncidentsCampaignBehaviour.IncidentType type, CampaignTime cooldown, Func<TextObject, bool> condition)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Incident 实例
Incident incident = ...;
incident.Initialize("example", "example", trigger, type, cooldown, func<TextObject, false);
```

### AddOption
`public void AddOption(string text, List<IncidentEffect> effects, Incident.IncidentOptionConditionDelegate condition = null, Incident.IncidentOptionConsequenceDelegate consequence = null)`

**用途 / Purpose:** **用途 / Purpose:** 将 option 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Incident 实例
Incident incident = ...;
incident.AddOption("example", effects, null, null);
```

### CanIncidentBeInvoked
`public bool CanIncidentBeInvoked()`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 incident be invoked 的前置条件。

```csharp
// 先通过子系统 API 拿到 Incident 实例
Incident incident = ...;
var result = incident.CanIncidentBeInvoked();
```

### GetOptionText
`public TextObject GetOptionText(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 option text 的结果。

```csharp
// 先通过子系统 API 拿到 Incident 实例
Incident incident = ...;
var result = incident.GetOptionText(0);
```

### GetOptionHint
`public List<TextObject> GetOptionHint(int index)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 option hint 的结果。

```csharp
// 先通过子系统 API 拿到 Incident 实例
Incident incident = ...;
var result = incident.GetOptionHint(0);
```

### InvokeOption
`public List<TextObject> InvokeOption(int index)`

**用途 / Purpose:** **用途 / Purpose:** 调用 InvokeOption 对应的操作。

```csharp
// 先通过子系统 API 拿到 Incident 实例
Incident incident = ...;
var result = incident.InvokeOption(0);
```

### IncidentOptionConditionDelegate
`public delegate bool IncidentOptionConditionDelegate(TextObject text)`

**用途 / Purpose:** **用途 / Purpose:** 调用 IncidentOptionConditionDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 Incident 实例
Incident incident = ...;
var result = incident.IncidentOptionConditionDelegate(text);
```

### IncidentOptionConsequenceDelegate
`public delegate void IncidentOptionConsequenceDelegate()`

**用途 / Purpose:** **用途 / Purpose:** 调用 IncidentOptionConsequenceDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 Incident 实例
Incident incident = ...;
incident.IncidentOptionConsequenceDelegate();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Incident incident = ...;
incident.Initialize("example", "example", trigger, type, cooldown, func<TextObject, false);
```

## 参见

- [本区域目录](../)