<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LoadError`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LoadError

**命名空间:** TaleWorlds.SaveSystem.Load
**模块:** TaleWorlds.SaveSystem
**类型:** `public class LoadError`
**领域:** save-system

## 概述

`LoadError` 位于 `TaleWorlds.SaveSystem.Load`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Load` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Message` | `public string Message { get; }` |

## 使用示例

```csharp
var value = new LoadError();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-save)
