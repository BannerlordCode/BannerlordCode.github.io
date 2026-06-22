<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NotableSpawnModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NotableSpawnModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NotableSpawnModel : MBGameModel<NotableSpawnModel>`
**Base:** `MBGameModel<NotableSpawnModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/NotableSpawnModel.cs`

## 概述

`NotableSpawnModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<NotableSpawnModel>(new MyNotableSpawnModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetTargetNotableCountForSettlement
```csharp
public abstract int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)
```

## 使用示例

```csharp
// NotableSpawnModel (Model) 的典型用法
Game.Current.ReplaceModel<NotableSpawnModel>(new MyNotableSpawnModel());
```

## 参见

- [完整类目录](../catalog)