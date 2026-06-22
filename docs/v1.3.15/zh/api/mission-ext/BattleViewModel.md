<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleViewModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleViewModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleViewModel`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/BattleViewModel.cs`

## 概述

`BattleViewModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<BattleViewModel>(new MyBattleViewModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `MyData` | `public ObservableCollection<TroopMissionInfo> MyData { get; set; }` |

## 使用示例

```csharp
// BattleViewModel (Model) 的典型用法
Game.Current.ReplaceModel<BattleViewModel>(new MyBattleViewModel());
```

## 参见

- [完整类目录](../catalog)