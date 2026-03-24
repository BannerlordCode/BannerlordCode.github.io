# ScreenManager / 屏幕管理器

**Namespace**: TaleWorlds.ScreenSystem
**File**: `TaleWorlds.ScreenSystem/ScreenManager.cs`
**Purpose**: 管理游戏屏幕栈和全局图层，处理屏幕切换、输入路由和焦点管理

ScreenManager是游戏UI系统的核心管理器，负责维护屏幕列表、处理屏幕切换、管理全局图层和处理输入事件。

## 关键属性

| 属性 | 类型 | 描述 |
|------|------|------|
| TopScreen | ScreenBase | 当前最顶层的活动屏幕 |
| FocusedLayer | ScreenLayer | 当前拥有输入焦点的图层 |
| FirstHitLayer | ScreenLayer | 当前帧第一个被点击的图层 |
| Scale | float | UI缩放因子 |
| UsableArea | Vec2 | 可用区域大小 |
| SortedLayers | List ScreenLayer | 按渲染顺序排列的图层列表 |
| IsEnterButtonRDown | bool | Enter按钮（手柄）是否按下 |
| IsWindowFocused | bool | 游戏窗口是否获得焦点 |
| IsLateTickInProgress | bool | 是否正在执行LateTick |

## 关键方法

| 方法 | 签名 | 描述 |
|------|------|------|
| PushScreen | `void PushScreen(ScreenBase screen)` | 将屏幕压入栈顶，暂停当前屏幕 |
| PopScreen | `void PopScreen()` | 弹出栈顶屏幕，恢复上一个屏幕 |
| ReplaceTopScreen | `void ReplaceTopScreen(ScreenBase screen)` | 替换栈顶屏幕 |
| CleanAndPushScreen | `void CleanAndPushScreen(ScreenBase screen)` | 清除所有屏幕后压入新屏幕 |
| CleanScreens | `void CleanScreens()` | 清除所有屏幕 |
| SetAndActivateRootScreen | `void SetAndActivateRootScreen(ScreenBase screen)` | 设置并激活根屏幕 |
| AddGlobalLayer | `void AddGlobalLayer(GlobalLayer layer, bool isFocusable)` | 添加全局图层 |
| RemoveGlobalLayer | `void RemoveGlobalLayer(GlobalLayer layer)` | 移除全局图层 |
| Tick | `void Tick(float dt)` | 主更新循环 |
| LateTick | `void LateTick(float dt)` | 晚更新（渲染） |
| UpdateLayout | `void UpdateLayout()` | 更新所有图层布局 |
| TrySetFocus | `void TrySetFocus(ScreenLayer layer)` | 尝试设置焦点图层 |
| TryLoseFocus | `void TryLoseFocus(ScreenLayer layer)` | 尝试释放焦点 |
| OnScaleChange | `void OnScaleChange(float newScale)` | 缩放变化回调 |
| ScreenTypeExistsAtList | `bool ScreenTypeExistsAtList(ScreenBase screen)` | 检查某类型屏幕是否已存在 |
| IsLayerBlockedAtPosition | `bool IsLayerBlockedAtPosition(ScreenLayer layer, Vector2 position)` | 检查指定位置是否被阻挡 |
| GetMouseVisibility | `bool GetMouseVisibility()` | 获取鼠标可见性状态 |
| IsControllerActive | `bool IsControllerActive()` | 检查手柄是否激活 |
| IsMouseCursorActive | `bool IsMouseCursorActive()` | 检查鼠标是否激活 |
| IsMouseCursorHidden | `bool IsMouseCursorHidden()` | 检查鼠标是否隐藏 |

## 事件

| 事件 | 描述 |
|------|------|
| OnPushScreen | 屏幕被压入时触发 |
| OnPopScreen | 屏幕被弹出时触发 |
| OnControllerDisconnected | 手柄断开连接时触发 |
| FocusGained | 窗口获得焦点时触发 |
| PlatformTextRequested | 平台文本输入请求时触发 |

## 使用示例

```csharp
// 压入新屏幕
ScreenManager.PushScreen(new MyCustomScreen());

// 替换当前屏幕
ScreenManager.ReplaceTopScreen(new MyCustomScreen());

// 添加全局图层（用于菜单、HUD等）
GlobalLayer myLayer = new GlobalLayer();
ScreenManager.AddGlobalLayer(myLayer, isFocusable: true);

// 检查手柄是否在使用
if (ScreenManager.IsControllerActive())
{
    // 使用手柄导航逻辑
}

// 监听屏幕切换事件
ScreenManager.OnPushScreen += (screen) => 
{
    Debug.WriteLine($"Screen pushed: {screen.GetType().Name}");
};
```
