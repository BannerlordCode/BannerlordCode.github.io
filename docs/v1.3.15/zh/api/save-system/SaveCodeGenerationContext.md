<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveCodeGenerationContext`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveCodeGenerationContext

**命名空间:** TaleWorlds.SaveSystem.Definition
**模块:** TaleWorlds.SaveSystem
**类型:** `public class SaveCodeGenerationContext`
**领域:** save-system

## 概述

`SaveCodeGenerationContext` 位于 `TaleWorlds.SaveSystem.Definition`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Definition` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddAssembly
`public void AddAssembly(Assembly assembly, string defaultNamespace, string location, string fileName)`

**用途 / Purpose:** 向当前集合/状态中添加 `assembly`。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 SaveCodeGenerationContext 实例，再调用它的公开方法
var value = new SaveCodeGenerationContext();
value.AddAssembly(assembly, "example", "example", "example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)
