# GauntletMovie / Gauntlet影片

**Namespace**: TaleWorlds.GauntletUI.Data
**File**: `TaleWorlds.GauntletUI.Data/GauntletMovie.cs`
**Purpose**: UI影片基类，管理UIwidget树和数据绑定

GauntletMovie是GauntletUI系统中UI影片的封装类，每个影片对应一个widget树和一个可选的数据源view model。它负责加载、渲染和释放UI资源。

## 关键属性

| 属性 | 类型 | 描述 |
|------|------|------|
| WidgetFactory | WidgetFactory | widget工厂，用于创建widget实例 |
| BrushFactory | BrushFactory | 画刷工厂，管理UI视觉样式 |
| Context | UIContext | UI上下文，提供系统级访问 |
| ViewModel | IViewModel | 关联的数据源view model |
| MovieName | string | 影片名称 |
| RootView | GauntletView | 根视图 |
| RootWidget | Widget | 根widget |
| IsLoaded | bool | 是否已加载完成 |
| IsReleased | bool | 是否已释放 |

## 关键方法

| 方法 | 签名 | 描述 |
|------|------|------|
| Load | `static IGauntletMovie Load(UIContext context, WidgetFactory widgetFactory, string movieName, IViewModel datasource, bool doNotUseGeneratedPrefabs, bool hotReloadEnabled)` | 静态工厂方法，加载影片 |
| Release | `void Release()` | 释放影片资源 |
| RefreshDataSource | `void RefreshDataSource(IViewModel dataSource)` | 刷新数据源 |
| RefreshBindingWithChildren | `void RefreshBindingWithChildren()` | 刷新所有子widget的数据绑定 |
| Update | `void Update()` | 每帧更新 |
| FindViewOf | `GauntletView FindViewOf(Widget widget)` | 查找widget对应的视图 |

## 使用示例

```csharp
// 加载影片
IGauntletMovie movie = GauntletMovie.Load(
    uiContext,
    widgetFactory,
    "MyCustomMovie",
    myViewModel,
    doNotUseGeneratedPrefabs: false,
    hotReloadEnabled: true
);

// 在Movie类中访问root widget
public class MyMovie : GauntletMovie
{
    protected override void OnInitialize()
    {
        base.OnInitialize();
        
        // 查找名为 "InfoPanel" 的子widget
        Widget infoPanel = RootWidget.FindChild("InfoPanel", includeAllChildren: true);
        
        // 访问brush或设置属性
        if (infoPanel != null)
        {
            infoPanel.IsVisible = false;
        }
    }
    
    public void UpdateData()
    {
        // 刷新数据绑定
        RefreshBindingWithChildren();
    }
}

// 释放影片
movie.Release();
```
