# GauntletSystem / Gauntlet系统事件管理

**Namespace**: TaleWorlds.GauntletUI
**File**: `TaleWorlds.GauntletUI/EventManager.cs`
**Purpose**: UI事件系统核心，管理输入事件、焦点、拖拽和widget更新

EventManager是GauntletUI的事件中枢，负责处理所有UI输入事件（鼠标、键盘、手柄）、管理widget焦点、处理拖拽操作，以及协调widget的更新循环。

## 关键属性

| 属性 | 类型 | 描述 |
|------|------|------|
| UIEventManager | EventManager | 静态单例实例 |
| FocusedWidget | Widget | 当前获得焦点的widget |
| HoveredView | Widget | 当前悬停的widget |
| DraggedWidget | Widget | 当前正在拖拽的widget |
| DragHoveredView | Widget | 拖拽悬停目标widget |
| MousePosition | Vector2 | 当前鼠标位置 |
| MousePositionInReferenceResolution | Vector2 | 参考分辨率下的鼠标位置 |
| DeltaMouseScroll | float | 鼠标滚轮增量 |
| LatestMouseDownWidget | Widget | 最近一次鼠标按下的widget |
| LatestMouseUpWidget | Widget | 最近一次鼠标释放的widget |
| LatestMouseAlternateDownWidget | Widget | 最近一次右键按下的widget |
| LatestMouseAlternateUpWidget | Widget | 最近一次右键释放的widget |
| Time | float | 累计时间 |
| IsControllerActive | bool | 手柄是否激活 |
| RightStickVerticalScrollAmount | float | 右摇杆垂直滚动量 |
| RightStickHorizontalScrollAmount | float | 右摇杆水平滚动量 |

## 关键方法

| 方法 | 签名 | 描述 |
|------|------|------|
| ClearFocus | `void ClearFocus()` | 清除当前焦点 |
| SetHoveredView | `void SetHoveredView(Widget view)` | 设置悬停widget |
| BeginDragging | `void BeginDragging(Widget draggedObject)` | 开始拖拽widget |
| ReleaseDraggedWidget | `Widget ReleaseDraggedWidget()` | 释放拖拽的widget |
| HitTest | `static bool HitTest(Widget widget, Vector2 position)` | 静态命中测试 |
| FocusTest | `bool FocusTest(Widget root)` | 测试widget是否为焦点的父级 |
| IsPointInsideUsableArea | `bool IsPointInsideUsableArea(Vector2 p)` | 检查点是否在可用区域内 |
| AddLateUpdateAction | `void AddLateUpdateAction(Widget owner, Action float action, int order)` | 添加延迟更新回调 |
| UpdateLayout | `void UpdateLayout()` | 触发布局更新 |
| Update | `void Update(float dt)` | 主更新 |
| LateUpdate | `void LateUpdate(float dt)` | 晚更新 |
| Render | `void Render(TwoDimensionContext twoDimensionContext)` | 渲染 |
| AddAfterFinalizedCallback | `void AddAfterFinalizedCallback(Action callback)` | 添加最终化后回调 |

## 事件

| 事件 | 描述 |
|------|------|
| OnDragStarted | 开始拖拽时触发 |
| OnDragEnded | 结束拖拽时触发 |
| OnFocusedWidgetChanged | 焦点widget变化时触发 |

## 使用示例

```csharp
// 获取事件管理器实例
EventManager eventManager = UIContext.EventManager;

// 监听焦点变化
eventManager.OnFocusedWidgetChanged += () =>
{
    Widget focused = eventManager.FocusedWidget;
    Debug.WriteLine($"Focus changed to: {focused?.Id ?? "null"}");
};

// 手动开始拖拽
eventManager.BeginDragging(myWidget);

// 清除焦点
eventManager.ClearFocus();

// 检查点是否在可用区域
Vector2 mousePos = eventManager.MousePosition;
if (eventManager.IsPointInsideUsableArea(mousePos))
{
    // 鼠标在可用区域内
}

// 使用命中测试
Widget targetWidget = someParentWidget;
if (EventManager.HitTest(targetWidget, mousePos))
{
    // 鼠标命中了targetWidget或其子widget
}

// 添加延迟更新（order 1-5，数字越大越晚执行）
eventManager.AddLateUpdateAction(this, (dt) => {
    // 自定义延迟更新逻辑
}, order: 3);
```
