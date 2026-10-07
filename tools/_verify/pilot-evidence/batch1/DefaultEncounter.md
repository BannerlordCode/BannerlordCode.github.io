# Evidence: DefaultEncounter

## 1. Source file & class declaration

- **Path:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandlers/DefaultEncounter.cs`
- **Class declaration:** line 16 — `public class DefaultEncounter`
- **Namespace:** `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers`
- **Base class:** None (static method container for game menu initialization handlers)

## 2. Per-member inventory

| # | Member | Signature | File:Line | Description |
|---|--------|-----------|-----------|-------------|
| 1 | `game_menu_taken_prisoner_ui_on_init` | `public static void game_menu_taken_prisoner_ui_on_init(MenuCallbackArgs args)` | DefaultEncounter.cs:27 | Sets background mesh for captivity menus (male/female, at-sea variants). Handles 8 menu IDs. |
| 2 | `game_menu_defeat_and_taken_prisoner_ui_on_init` | `public static void game_menu_defeat_and_taken_prisoner_ui_on_init(MenuCallbackArgs args)` | DefaultEncounter.cs:66 | Sets background mesh to "encounter_lose" for defeat-and-capture menu. |
| 3 | `game_menu_taken_prisoner_town_ui_on_init` | `public static void game_menu_taken_prisoner_town_ui_on_init(MenuCallbackArgs args)` | DefaultEncounter.cs:78 | Sets background mesh for town captivity menus (male/female variants). Handles 5 menu IDs. |
| 4 | `E3ActionMenuOnInit` | `private static void E3ActionMenuOnInit(MenuCallbackArgs args)` | DefaultEncounter.cs:93 | Sets background mesh to "gui_bg_lord_khuzait" for E3 action menu. |
| 5 | `game_menu_join_encounter_on_init` | `private static void game_menu_join_encounter_on_init(MenuCallbackArgs args)` | DefaultEncounter.cs:100 | Sets background mesh for join-encounter menu based on party type (naval/caravan/culture). |
| 6 | `game_menu_encounter_on_init` | `private static void game_menu_encounter_on_init(MenuCallbackArgs args)` | DefaultEncounter.cs:113 | Main encounter menu initializer: sets background mesh and encounter text variables based on context (settlement type, battle type, party type, siege state). Handles 3 menu IDs. |
| 7 | `game_menu_naval_town_outside_on_init` | `private static void game_menu_naval_town_outside_on_init(MenuCallbackArgs args)` | DefaultEncounter.cs:460 | Sets background mesh to "town_blockade" for naval town outside menu. |
| 8 | `game_menu_join_siege_event_on_init` | `private static void game_menu_join_siege_event_on_init(MenuCallbackArgs args)` | DefaultEncounter.cs:467 | Sets background mesh and text for join-siege-event/join-sally-out menus. Handles 2 menu IDs. |
| 9 | `game_menu_village_loot_complete_on_init` | `private static void game_menu_village_loot_complete_on_init(MenuCallbackArgs args)` | DefaultEncounter.cs:480 | Sets background mesh to village wait mesh for loot-complete menu. |
| 10 | `game_menu_town_menu_on_init` | `public static void game_menu_town_menu_on_init(MenuCallbackArgs args)` | DefaultEncounter.cs:487 | Sets background mesh for town menus (town_wait, town_guard, tournament, siege_attacker_defeated). Handles 5 menu IDs. |
| 11 | `game_menu_attackers_left_on_init` | `public static void game_menu_attackers_left_on_init(MenuCallbackArgs args)` | DefaultEncounter.cs:495 | Sets background mesh to "wait_besieging" for siege attacker-left menu. |
| 12 | `game_menu_new_game_begin_on_init` | `public static void game_menu_new_game_begin_on_init(MenuCallbackArgs args)` | DefaultEncounter.cs:502 | Exits to last menu and navigates to hero encyclopedia page for new game begin. |
| 13 | `game_menu_kingdom_mno_call_to_arms_on_consequence` | `public static void game_menu_kingdom_mno_call_to_arms_on_consequence(MenuCallbackArgs args)` | DefaultEncounter.cs:509 | Empty handler for kingdom call-to-arms menu consequence. |
| 14 | `game_menu_encyclopedia_on_consequence` | `public static void game_menu_encyclopedia_on_consequence(MenuCallbackArgs args)` | DefaultEncounter.cs:516 | Empty handler for encyclopedia menu consequence (kingdom + reports). |
| 15 | `game_menu_town_menu_request_meeting_on_init` | `public static void game_menu_town_menu_request_meeting_on_init(MenuCallbackArgs args)` | DefaultEncounter.cs:523 | Sets background mesh for request-meeting menus. Handles 2 menu IDs. |

## 3. Call example candidates (≥3)

DefaultEncounter is invoked via the `[GameMenuInitializationHandler]` attribute system — `GameMenuCallbackManager` scans the assembly via reflection and registers delegates. There are no direct call sites; the "call" is the attribute-based dispatch.

| # | Mechanism | File:Line | Evidence |
|---|-----------|-----------|----------|
| 1 | Attribute registration | TaleWorlds.CampaignSystem/GameMenus/GameMenuCallbackManager.cs:35-69 | `Assembly assembly = typeof(GameMenuInitializationHandler).Assembly;` → scans all methods with `[GameMenuInitializationHandler]` attribute, creates delegates, registers in dictionary. |
| 2 | Handler invocation | TaleWorlds.CampaignSystem/GameMenus/GameMenuCallbackManager.cs:132 | `GameMenuInitializationHandlerDelegate gameMenuInitializationHandlerDelegate = null;` → looks up registered handler by menu ID and invokes it. |
| 3 | Attribute definition | TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandler.cs:7 | `public class GameMenuInitializationHandler : Attribute` — the attribute class that marks methods as menu init handlers. |
| 4 | Example attribute usage | TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandlers/DefaultEncounter.cs:27 | `[GameMenuInitializationHandler("taken_prisoner")]` — registers this method for the "taken_prisoner" menu ID. |

**Mod-relevant call pattern:** A mod would subclass or replace `DefaultEncounter` methods by creating a new class with `[GameMenuInitializationHandler("menu_id")]` attributes, or by patching the existing methods via Harmony.

## 4. Current page status

- **Page path:** `content/v1.3.0/zh/api/campaign/DefaultEncounter.md`
- **Byte count:** 4077 bytes
- **classifyPage result:** `stub` — reasons: `boilerplate-mental-model`, `no-real-example`, `weak-mental`, `weak-deps`
- **Six-section completeness:**

| Section | Present? | Notes |
|---------|----------|-------|
| 概述 (Overview) | ✅ | Boilerplate: "位于…它通过这组公开成员把对应子系统的状态…" |
| 心智模型 (Mental Model) | ✅ | Boilerplate: "先从命名空间…判断它属于哪层系统…" |
| 主要属性 (Properties) | ❌ | **Missing** — no properties section (class has no properties, but section absent) |
| 主要方法 (Methods) | ✅ | 9 methods listed, all with formulaic "调用 X 对应的操作" purposes |
| 使用示例 (Examples) | ✅ | Single generic static call snippet |
| 参见 (See Also) | ✅ | Link to parent dir |

**Verdict:** 5/6 sections (missing 主要属性). All 15 public members are static methods with `[GameMenuInitializationHandler]` attributes. Page lists only 9 of 15 methods (missing 6 private ones — acceptable since they're private). Missing: explanation of the attribute-based dispatch system, real mod examples (how to override a menu handler), dependency links to `GameMenuCallbackManager`, `MenuCallbackArgs`, `PlayerEncounter`.
