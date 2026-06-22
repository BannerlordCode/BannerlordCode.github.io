<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameModel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameModel`
**Base:** 无
**File:** `TaleWorlds.Core/GameModel.cs`

## 概述

`GameModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<GameModel>(new MyGameModel())` 注册，以改变其计算逻辑。

## 使用示例

```csharp
// GameModel (Model) 的典型用法
Game.Current.ReplaceModel<GameModel>(new MyGameModel());
```

## 参见

- [完整类目录](../catalog)