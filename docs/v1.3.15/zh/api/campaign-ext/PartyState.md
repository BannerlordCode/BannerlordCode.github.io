<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyState`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyState

**命名空间:** TaleWorlds.CampaignSystem.GameState
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PartyState` 是 `TaleWorlds.CampaignSystem.GameState` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsMenuState` | `public override bool IsMenuState { get; set; }` |
| `PartyScreenLogic` | `public PartyScreenLogic PartyScreenLogic { get; set; }` |
| `PartyScreenMode` | `public PartyScreenHelper.PartyScreenMode PartyScreenMode { get; set; }` |
| `IsDonating` | `public bool IsDonating { get; set; }` |
| `Handler` | `public IPartyScreenLogicHandler Handler { get; set; }` |


## 主要方法

### RequestUserInput

```csharp
public void RequestUserInput(string text, Action accept, Action cancel)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)