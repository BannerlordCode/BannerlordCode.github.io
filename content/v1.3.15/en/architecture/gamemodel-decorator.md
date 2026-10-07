---
title: "GameModel Decorator Pattern"
description: "Bannerlord's GameModel decorator pattern: how CampaignGameStarter.AddModel<T> wraps a new model around the old one, how GetModel<T> reads from the tail of the chain, and why mods use decoration instead of direct replacement."
---

# GameModel Decorator Pattern

> The GameModel decorator pattern answers a mod's core extension question: **how do I change game rules without rewriting the entire system?** Answer: wrap a new model around the old one, override only the methods you care about, and delegate the rest to `BaseModel`.

> Section schema: this page uses 5 sections (in document order): One-sentence positioning | Mental model | Real minimal example | Common misuse | Navigation

## One-sentence positioning

`MBGameModel<T>` is a **decorator base class**: a mod derives from it, overrides a few methods, registers via `CampaignGameStarter.AddModel<T>`, and the game engine retrieves the outermost model via `GetModel<T>()` — you modify "the outermost layer of skin" while the original model remains in the chain, reachable through delegation.

## Mental model

Think of the GameModel system as an **onion** (a decorator chain):

1. **The core is empty**. `GameModel` itself is an empty abstract class (`TaleWorlds.Core/GameModel.cs:3`) — it serves only as a type marker. The real rule logic lives in derived classes.
2. **Each layer overrides only the methods it cares about**. `MBGameModel<T>` defines the `BaseModel` property (`TaleWorlds.Core/MBGameModel.cs:5`) and the `Initialize(T baseModel)` method (`TaleWorlds.Core/MBGameModel.cs:7`). A decorator overrides the methods it needs to change and delegates the rest via `BaseModel.MethodName(...)`.
3. **Registration = wrapping**. `CampaignGameStarter.AddModel<T>(MBGameModel<T>)` (`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`) does three things:
   - Calls `GetModel<T>()` to find the current outermost model in the chain;
   - Calls `gameModel.Initialize(model)` to inject it as the new layer's `BaseModel`;
   - Appends the new layer to the end of the `_models` list (`CampaignGameStarter.cs:187`).
4. **Reading = take from the tail**. `GetModel<T>()` (`CampaignGameStarter.cs:75`) iterates the list **from the end backward**, returning the first type match — i.e., the **last registered, outermost** model.
5. **Multiple mods can stack**. Each mod's `AddModel` call appends a new layer to the tail; they don't overwrite each other. The outermost layer (the mod that called `AddModel` last) wins in `GetModel<T>()`.

```
_models list (index 0 → N = registration order)
┌─────────────────────────────────────────────────┐
│ [0] DefaultDiplomacyModel  ← game's base model   │
│ [1] ModA_DiplomacyModel     ← ModA's decorator    │
│ [2] ModB_DiplomacyModel     ← ModB's decorator    │
└─────────────────────────────────────────────────┘
                                      ▲
                                      │ GetModel<DiplomacyModel>() scans from tail
                                      │ returns [2] = ModB's decorator
```

### Why decorator pattern instead of direct replacement

| Approach | Problem |
|----------|---------|
| Direct replacement (overwrite original) | Requires copying the entire original class; when multiple mods replace the same model, the later one fully overwrites the earlier — conflicts are irreconcilable |
| Decorator pattern (this approach) | Each layer overrides only what it cares about; multiple mods stack and coexist; the inner model is always reachable via `BaseModel` |

The core benefit of the decorator pattern is **composability**: ModA changes relation calculation, ModB changes war score — each adds its own layer via `AddModel`, and the chain doesn't interfere.

## Real minimal example

### How the game registers default models

The game itself registers all default models via `AddModel<T>` in `SandBoxManager`. For `DiplomacyModel` (`TaleWorlds.CampaignSystem/SandBoxManager.cs:256`):

```csharp
gameStarter.AddModel<DiplomacyModel>(new DefaultDiplomacyModel());
```

`DefaultDiplomacyModel` is the concrete implementation of `DiplomacyModel`, and `DiplomacyModel` itself derives from `MBGameModel<DiplomacyModel>` (`TaleWorlds.CampaignSystem/ComponentInterfaces/DiplomacyModel.cs:3`):

```csharp
public abstract class DiplomacyModel : MBGameModel<DiplomacyModel>
```

### How a mod replaces DiplomacyModel

A mod that wants to change diplomacy rules (e.g., make relations grow faster) needs three steps:

**Step 1**: Create a decorator class, inherit `DiplomacyModel`, override only the methods you care about:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

namespace MyDiplomacyMod;

public class MyDiplomacyModel : DiplomacyModel
{
    // Override relation growth factor: double all relation gains
    public override float GetRelationIncreaseFactor(Hero hero1, Hero hero2, float relationValue)
    {
        // First get the inner (original) model's result
        float baseFactor = BaseModel.GetRelationIncreaseFactor(hero1, hero2, relationValue);
        return baseFactor * 2f;
    }

    // The remaining 40+ abstract methods don't need to be overridden —
    // if the DiplomacyModel derivation chain already has a DefaultDiplomacyModel
    // providing default implementations, you can selectively override only the
    // methods you need to change and delegate the rest via BaseModel.
    // Note: if a base method is abstract, you must implement all abstract methods,
    // or inherit from an intermediate class that already provides defaults.
}
```

**Step 2**: Register the decorator in `OnGameStart`:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyDiplomacyMod;

public sealed class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter starter)
    {
        base.OnGameStart(game, starter);
        if (starter is CampaignGameStarter campaignStarter)
        {
            // AddModel will:
            // 1. Call GetModel<DiplomacyModel>() to find the game's registered DefaultDiplomacyModel
            // 2. Call MyDiplomacyModel.Initialize(defaultModel) to inject it as BaseModel
            // 3. Append MyDiplomacyModel to the end of the _models list
            campaignStarter.AddModel(new MyDiplomacyModel());
        }
    }
}
```

**Step 3**: After this, when the game internally reads via `GetModel<DiplomacyModel>()` or `GameModels.DiplomacyModel` (`TaleWorlds.CampaignSystem/GameModels.cs:657`), it gets `MyDiplomacyModel` — the outermost decorator.

### Decorator chain delegation

```
Game code calls GetModel<DiplomacyModel>()
    │
    ▼
Returns MyDiplomacyModel (outermost)
    │
    ├── GetRelationIncreaseFactor() → overridden: baseFactor * 2
    │       │
    │       └── BaseModel.GetRelationIncreaseFactor()
    │               │
    │               ▼
    │           Returns DefaultDiplomacyModel (inner) original result
    │
    └── Other methods → not overridden, delegate directly to BaseModel (DefaultDiplomacyModel)
```

### Key source locations

| Mechanism | File | Line | Code |
|-----------|------|------|------|
| Decorator base class | `TaleWorlds.Core/MBGameModel.cs` | 3 | `public abstract class MBGameModel<T> : GameModel where T : GameModel` |
| BaseModel property | `TaleWorlds.Core/MBGameModel.cs` | 5 | `private protected T BaseModel { protected get; private set; }` |
| Initialize injection | `TaleWorlds.Core/MBGameModel.cs` | 7 | `public void Initialize(T baseModel)` |
| Read model | `TaleWorlds.CampaignSystem/CampaignGameStarter.cs` | 75 | `public T GetModel<T>() where T : GameModel` |
| Register decorator | `TaleWorlds.CampaignSystem/CampaignGameStarter.cs` | 95 | `public void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel` |
| Model list | `TaleWorlds.CampaignSystem/CampaignGameStarter.cs` | 187 | `private readonly List<GameModel> _models = new List<GameModel>();` |
| Game registers default | `TaleWorlds.CampaignSystem/SandBoxManager.cs` | 256 | `gameStarter.AddModel<DiplomacyModel>(new DefaultDiplomacyModel())` |
| Game reads model | `TaleWorlds.CampaignSystem/GameModels.cs` | 657 | `this.DiplomacyModel = base.GetGameModel<DiplomacyModel>()` |

## Common misuse

1. **Calling `AddModel` in `OnSubModuleLoad` or `Initialize`**. At that point `CampaignGameStarter` doesn't exist yet (no game session has started), so you can't get an `IGameStarter` reference. `AddModel` must be called in `OnGameStart(Game, IGameStarter)` — only then does the `starter` parameter carry the `CampaignGameStarter` instance.

2. **Forgetting `BaseModel` can be `null`**. If a mod's `AddModel` call happens before the game registers the default model (e.g., the game hasn't executed `SandBoxManager`'s registration code yet), `GetModel<T>()` returns `default(T)` (which is `null` for reference types), and `Initialize(null)` sets `BaseModel` to `null`. Any subsequent `BaseModel.Method()` call will throw `NullReferenceException`. Ensure your mod registers in `OnGameStart` after the game has completed default model registration.

3. **Overriding a method without delegating to `BaseModel`**. If you override a method but completely replace the logic without calling `BaseModel.MethodName()`, all inner mod decorators are bypassed — other mods' modifications to the same method are entirely lost. The correct approach: call `BaseModel.Method()` first to get the original result, then modify it.

4. **Assuming the non-generic `AddModel(GameModel)` overload works for decoration**. The `AddModel(GameModel gameModel)` at `CampaignGameStarter.cs:89` simply appends the model to the list **without** calling `Initialize`, so `BaseModel` is never injected. If you register an `MBGameModel<T>` derived class with this overload, its `BaseModel` will be `null`. Decorators must use the generic overload `AddModel<T>(MBGameModel<T>)`.

5. **Directly `new`-ing the inner model inside the decorator**. Don't `new DefaultDiplomacyModel()` in `MyDiplomacyModel`'s constructor and assign it to `BaseModel` — `BaseModel`'s setter is `private set`, and only the `Initialize` method can set it. The inner model must be automatically found and injected by `AddModel<T>` via `GetModel<T>()`.

## Navigation

- [↑ Architecture Overview](../)
- [↔ Module System](../module-system) · [↔ SDK Overview](../sdk-overview) · [↔ Crash & Save Boundaries](../crash-boundaries) · [↔ Save System](../save-system)
- Related class pages: [MBGameModel](../../api/core-extra/MBGameModel/) · [GameModel](../../api/core-extra/GameModel/) · [CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter/) · [DiplomacyModel](../../api/campaign-ext/DiplomacyModel/) · [BasicGameStarter](../../api/mission-ext/BasicGameStarter/)
