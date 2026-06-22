<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameModelsManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameModelsManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameModelsManager`
**Base:** 无
**File:** `TaleWorlds.Core/GameModelsManager.cs`

## 概述

`GameModelsManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### GetGameModels
```csharp
public MBReadOnlyList<GameModel> GetGameModels()
```

## 使用示例

```csharp
// GameModelsManager (Manager) 的典型用法
GameModelsManager.Current;
```

## 参见

- [完整类目录](../catalog)