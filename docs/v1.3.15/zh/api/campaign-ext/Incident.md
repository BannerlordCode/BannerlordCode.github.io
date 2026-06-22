<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Incident`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Incident

**命名空间:** TaleWorlds.CampaignSystem.Incidents
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Incident` 是 `TaleWorlds.CampaignSystem.Incidents` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public void Initialize(string title, string description, IncidentsCampaignBehaviour.IncidentTrigger trigger, IncidentsCampaignBehaviour.IncidentType type, CampaignTime cooldown, Func<TextObject, bool> condition)
```

### AddOption

```csharp
public void AddOption(string text, List<IncidentEffect> effects, Incident.IncidentOptionConditionDelegate condition = null, Incident.IncidentOptionConsequenceDelegate consequence = null)
```

### CanIncidentBeInvoked

```csharp
public bool CanIncidentBeInvoked()
```

### GetOptionText

```csharp
public TextObject GetOptionText(int index)
```

### GetOptionHint

```csharp
public List<TextObject> GetOptionHint(int index)
```

### InvokeOption

```csharp
public List<TextObject> InvokeOption(int index)
```

### IncidentOptionConditionDelegate

```csharp
public delegate bool IncidentOptionConditionDelegate(TextObject text)
```

### IncidentOptionConsequenceDelegate

```csharp
public delegate void IncidentOptionConsequenceDelegate()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)