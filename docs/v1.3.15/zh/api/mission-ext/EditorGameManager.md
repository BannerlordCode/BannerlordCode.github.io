<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EditorGameManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EditorGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EditorGameManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `TaleWorlds.MountAndBlade/EditorGameManager.cs`

## 概述

`EditorGameManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### OnAfterCampaignStart
```csharp
public override void OnAfterCampaignStart(Game game)
```

### OnLoadFinished
```csharp
public override void OnLoadFinished()
```

## 使用示例

```csharp
// EditorGameManager (Manager) 的典型用法
EditorGameManager.Current;
```

## 参见

- [完整类目录](../catalog)