<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultNotableSpawnModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultNotableSpawnModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultNotableSpawnModel : NotableSpawnModel`
**Base:** `NotableSpawnModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultNotableSpawnModel.cs`

## 概述

`DefaultNotableSpawnModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultNotableSpawnModel>(new MyDefaultNotableSpawnModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetTargetNotableCountForSettlement
```csharp
public override int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)
```

## 使用示例

```csharp
// DefaultNotableSpawnModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultNotableSpawnModel>(new MyDefaultNotableSpawnModel());
```

## 参见

- [完整类目录](../catalog)