<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KeybindingPopup`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# KeybindingPopup

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class KeybindingPopup`
**Base:** 无
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/KeybindingPopup.cs`

## 概述

`KeybindingPopup` 位于 `TaleWorlds.MountAndBlade.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |

## 主要方法

### Tick
`public void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnToggle
`public void OnToggle(bool isActive)`

**用途 / Purpose:** 当 `toggle` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new KeybindingPopup();
value.Tick();
```

## 参见

- [完整类目录](../catalog)