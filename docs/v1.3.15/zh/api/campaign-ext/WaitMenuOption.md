<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WaitMenuOption`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WaitMenuOption

**命名空间:** TaleWorlds.CampaignSystem.GameMenus
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`WaitMenuOption` 是 `TaleWorlds.CampaignSystem.GameMenus` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Priority` | `public int Priority { get; }` |
| `Text` | `public TextObject Text { get; }` |
| `IdString` | `public string IdString { get; }` |
| `Tooltip` | `public string Tooltip { get; }` |
| `IsLeave` | `public bool IsLeave { get; }` |


## 主要方法

### GetConditionsHold

```csharp
public bool GetConditionsHold(Game game, MapState mapState)
```

### RunConsequence

```csharp
public void RunConsequence(Game game, MapState mapState)
```

### Deserialize

```csharp
public void Deserialize(XmlNode node, Type typeOfWaitMenusCallbacks)
```

### OnConditionDelegate

```csharp
public delegate bool OnConditionDelegate(MenuCallbackArgs args)
```

### OnConsequenceDelegate

```csharp
public delegate void OnConsequenceDelegate(MenuCallbackArgs args)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)