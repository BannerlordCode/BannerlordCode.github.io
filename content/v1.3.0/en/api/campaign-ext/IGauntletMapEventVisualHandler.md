---
title: "IGauntletMapEventVisualHandler"
description: "Auto-generated class reference for IGauntletMapEventVisualHandler."
---
# IGauntletMapEventVisualHandler

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public interface IGauntletMapEventVisualHandler`
**Base:** none
**File:** `SandBox.GauntletUI/Map/IGauntletMapEventVisualHandler.cs`

## Overview

`IGauntletMapEventVisualHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `IGauntletMapEventVisualHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIGauntletMapEventVisualHandler service = ...;
```

## See Also

- [Area Index](../)