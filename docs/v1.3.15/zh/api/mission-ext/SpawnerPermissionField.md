<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpawnerPermissionField`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnerPermissionField

**命名空间:** TaleWorlds.MountAndBlade.Objects.Siege
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class SpawnerPermissionField : EditorVisibleScriptComponentVariable`
**Base:** `EditorVisibleScriptComponentVariable`
**领域:** mission-ext

## 概述

`SpawnerPermissionField` 位于 `TaleWorlds.MountAndBlade.Objects.Siege`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Objects.Siege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AssignParameters
`public virtual void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)`

**用途 / Purpose:** 处理 `assign parameters` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 SpawnerPermissionField 实例，再调用它的公开方法
var value = new SpawnerPermissionField();
value.AssignParameters(_spawnerMissionHelper);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
