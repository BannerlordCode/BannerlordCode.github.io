<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AutoBlockModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AutoBlockModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AutoBlockModel : MBGameModel<AutoBlockModel>`
**Base:** `MBGameModel<AutoBlockModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AutoBlockModel.cs`

## 概述

`AutoBlockModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<AutoBlockModel>(new MyAutoBlockModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetBlockDirection
```csharp
public abstract Agent.UsageDirection GetBlockDirection(Mission mission)
```

## 使用示例

```csharp
// AutoBlockModel (Model) 的典型用法
Game.Current.ReplaceModel<AutoBlockModel>(new MyAutoBlockModel());
```

## 参见

- [完整类目录](../catalog)