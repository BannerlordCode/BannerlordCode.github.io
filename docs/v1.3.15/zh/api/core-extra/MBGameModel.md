<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBGameModel`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBGameModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class MBGameModel<T> : GameModel where T : GameModel`
**Base:** `GameModel where T : GameModel`
**File:** `TaleWorlds.Core/MBGameModel.cs`

## 概述

`MBGameModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<MBGameModel>(new MyMBGameModel())` 注册，以改变其计算逻辑。

## 主要方法

### Initialize
```csharp
public void Initialize(T baseModel)
```

## 使用示例

```csharp
// MBGameModel (Model) 的典型用法
Game.Current.ReplaceModel<MBGameModel>(new MyMBGameModel());
```

## 参见

- [完整类目录](../catalog)