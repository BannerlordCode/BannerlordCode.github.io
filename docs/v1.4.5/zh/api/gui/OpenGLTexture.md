<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OpenGLTexture`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# OpenGLTexture

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class OpenGLTexture : ITexture`
**Base:** `ITexture`
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/OpenGLTexture.cs`

## 概述

`OpenGLTexture` 位于 `TaleWorlds.TwoDimension.Standalone`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `ClampToEdge` | `public bool ClampToEdge { get; set; }` |

## 主要方法

### Initialize
`public void Initialize(string name, int width, int height)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### CopyFrom
`public void CopyFrom(OpenGLTexture texture)`

**用途 / Purpose:** 处理 `copy from` 相关逻辑。

### Delete
`public void Delete()`

**用途 / Purpose:** 处理 `delete` 相关逻辑。

### FromFile
`public static OpenGLTexture FromFile(ResourceDepot resourceDepot, string name)`

**用途 / Purpose:** 处理 `from file` 相关逻辑。

### FromFile
`public static OpenGLTexture FromFile(string fullFilePath)`

**用途 / Purpose:** 处理 `from file` 相关逻辑。

### Release
`public void Release()`

**用途 / Purpose:** 处理 `release` 相关逻辑。

### LoadFromFile
`public void LoadFromFile(ResourceDepot resourceDepot, string name)`

**用途 / Purpose:** 加载 `from file` 数据。

### LoadFromFile
`public void LoadFromFile(string fullPathName)`

**用途 / Purpose:** 加载 `from file` 数据。

### IsLoaded
`public bool IsLoaded()`

**用途 / Purpose:** 处理 `is loaded` 相关逻辑。

## 使用示例

```csharp
var value = new OpenGLTexture();
value.Initialize("example", 0, 0);
```

## 参见

- [完整类目录](../catalog)