---
title: "Incident"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Incident`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Incident

**Namespace:** TaleWorlds.CampaignSystem.Incidents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Incident : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Incidents/Incident.cs`

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

## 主要方法

### IncidentOptionConditionDelegate
`public delegate bool IncidentOptionConditionDelegate(TextObject text)`

**用途 / Purpose:** 处理 `incident option condition delegate` 相关逻辑。

### IncidentOptionConsequenceDelegate
`public delegate void IncidentOptionConsequenceDelegate()`

**用途 / Purpose:** 处理 `incident option consequence delegate` 相关逻辑。

### Initialize
`public void Initialize(string title, string description, IncidentsCampaignBehaviour.IncidentTrigger trigger, IncidentsCampaignBehaviour.IncidentType type, CampaignTime cooldown, Func<TextObject, bool> condition)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### AddOption
`public void AddOption(string text, List<IncidentEffect> effects, IncidentOptionConditionDelegate condition = null, IncidentOptionConsequenceDelegate consequence = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `option`。

### CanIncidentBeInvoked
`public bool CanIncidentBeInvoked()`

**用途 / Purpose:** 判断当前对象是否可以执行 `incident be invoked`。

### GetOptionText
`public TextObject GetOptionText(int index)`

**用途 / Purpose:** 获取 `option text` 的当前值。

### GetOptionHint
`public List<TextObject> GetOptionHint(int index)`

**用途 / Purpose:** 获取 `option hint` 的当前值。

### InvokeOption
`public List<TextObject> InvokeOption(int index)`

**用途 / Purpose:** 处理 `invoke option` 相关逻辑。

## 使用示例

```csharp
var value = new Incident();
value.IncidentOptionConditionDelegate(text);
```

## 参见

- [完整类目录](../catalog)