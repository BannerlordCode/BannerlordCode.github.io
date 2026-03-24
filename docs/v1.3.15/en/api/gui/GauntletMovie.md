# GauntletMovie / Gauntlet影片

**Namespace**: TaleWorlds.GauntletUI.Data
**File**: `TaleWorlds.GauntletUI.Data/GauntletMovie.cs`
**Purpose**: UI movie base class, manages UI widget trees and data binding

GauntletMovie is the encapsulation class for UI movies in the GauntletUI system. Each movie corresponds to a widget tree and an optional data source view model. It handles loading, rendering, and releasing UI resources.

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| WidgetFactory | WidgetFactory | Widget factory for creating widget instances |
| BrushFactory | BrushFactory | Brush factory for managing UI visual styles |
| Context | UIContext | UI context providing system-level access |
| ViewModel | IViewModel | Associated data source view model |
| MovieName | string | Movie name |
| RootView | GauntletView | Root view |
| RootWidget | Widget | Root widget |
| IsLoaded | bool | Whether loading is complete |
| IsReleased | bool | Whether released |

## Key Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| Load | `static IGauntletMovie Load(UIContext context, WidgetFactory widgetFactory, string movieName, IViewModel datasource, bool doNotUseGeneratedPrefabs, bool hotReloadEnabled)` | Static factory method to load a movie |
| Release | `void Release()` | Releases movie resources |
| RefreshDataSource | `void RefreshDataSource(IViewModel dataSource)` | Refreshes data source |
| RefreshBindingWithChildren | `void RefreshBindingWithChildren()` | Refreshes all child widget data bindings |
| Update | `void Update()` | Per-frame update |
| FindViewOf | `GauntletView FindViewOf(Widget widget)` | Finds the view corresponding to a widget |

## Usage Examples

```csharp
// Load a movie
IGauntletMovie movie = GauntletMovie.Load(
    uiContext,
    widgetFactory,
    "MyCustomMovie",
    myViewModel,
    doNotUseGeneratedPrefabs: false,
    hotReloadEnabled: true
);

// In a Movie class, access the root widget
public class MyMovie : GauntletMovie
{
    protected override void OnInitialize()
    {
        base.OnInitialize();
        
        // Find a child widget named "InfoPanel"
        Widget infoPanel = RootWidget.FindChild("InfoPanel", includeAllChildren: true);
        
        // Access brush or set properties
        if (infoPanel != null)
        {
            infoPanel.IsVisible = false;
        }
    }
    
    public void UpdateData()
    {
        // Refresh data bindings
        RefreshBindingWithChildren();
    }
}

// Release the movie
movie.Release();
```
