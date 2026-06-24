<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IUtils`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IUtils

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IUtils : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IUtils.cs`

## 概述

`IUtils` 位于 `Galaxy.Api`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Galaxy.Api` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Dispose
`public virtual void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### GetImageSize
`public virtual void GetImageSize(uint imageID, ref int width, ref int height)`

**用途 / Purpose:** 获取 `image size` 的当前值。

### GetImageRGBA
`public virtual void GetImageRGBA(uint imageID, byte buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `image r g b a` 的当前值。

### RegisterForNotification
`public virtual void RegisterForNotification(string type)`

**用途 / Purpose:** 处理 `register for notification` 相关逻辑。

### GetNotification
`public virtual uint GetNotification(ulong notificationID, ref bool consumable, ref byte type, uint typeLength, byte content, uint contentSize)`

**用途 / Purpose:** 获取 `notification` 的当前值。

### ShowOverlayWithWebPage
`public virtual void ShowOverlayWithWebPage(string url)`

**用途 / Purpose:** 处理 `show overlay with web page` 相关逻辑。

### IsOverlayVisible
`public virtual bool IsOverlayVisible()`

**用途 / Purpose:** 处理 `is overlay visible` 相关逻辑。

### GetOverlayState
`public virtual OverlayState GetOverlayState()`

**用途 / Purpose:** 获取 `overlay state` 的当前值。

### DisableOverlayPopups
`public virtual void DisableOverlayPopups(string popupGroup)`

**用途 / Purpose:** 处理 `disable overlay popups` 相关逻辑。

### GetGogServicesConnectionState
`public virtual GogServicesConnectionState GetGogServicesConnectionState()`

**用途 / Purpose:** 获取 `gog services connection state` 的当前值。

## 使用示例

```csharp
var value = new IUtils();
value.Dispose();
```

## 参见

- [完整类目录](../catalog)