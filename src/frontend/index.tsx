/**
 * Interactive Workflow App — Scaffold (Work Item 1)
 *
 * This is the starting point for the Interactive Workflow Forge app.
 * It renders a two-panel layout with:
 *   - Left panel:  "Workflow Library" — where workflows will be listed
 *   - Right panel: "Workflow Runner"  — where workflows will be run
 *
 * This scaffold satisfies work item 1. Subsequent work items will
 * progressively fill in the functionality of each panel.
 */
import React from 'react';
import ForgeReconciler, {
  Box,
  Heading,
  Inline,
  Stack,
  Text,
  xcss,
} from '@forge/react';

// ─── Styles ──────────────────────────────────────────────────────────────────

const pageStyles = xcss({
  height: '100%',
  minHeight: '600px',
});

const leftPanelStyles = xcss({
  width: '280px',
  minWidth: '280px',
  borderColor: 'color.border',
  borderWidth: 'border.width',
  borderStyle: 'solid',
  borderRadius: 'radius.small',
  backgroundColor: 'elevation.surface.sunken',
  padding: 'space.200',
  height: '100%',
});

const rightPanelStyles = xcss({
  flexGrow: 1,
  borderColor: 'color.border',
  borderWidth: 'border.width',
  borderStyle: 'solid',
  borderRadius: 'radius.small',
  backgroundColor: 'elevation.surface',
  padding: 'space.200',
  height: '100%',
});

const placeholderBoxStyles = xcss({
  padding: 'space.300',
  borderColor: 'color.border',
  borderWidth: 'border.width',
  borderStyle: 'dashed',
  borderRadius: 'radius.small',
  backgroundColor: 'color.background.neutral.subtle',
});

// ─── Left Panel: Workflow Library ────────────────────────────────────────────

const WorkflowLibrary = () => (
  <Box xcss={leftPanelStyles}>
    <Stack space="space.200">
      <Heading as="h2" size="small">
        Workflow Library
      </Heading>
      <Box xcss={placeholderBoxStyles}>
        <Text color="color.text.subtlest" align="center">
          Your workflows will appear here. Use the button above to create your first workflow.
        </Text>
      </Box>
    </Stack>
  </Box>
);

// ─── Right Panel: Workflow Runner ─────────────────────────────────────────────

const WorkflowRunner = () => (
  <Box xcss={rightPanelStyles}>
    <Stack space="space.200">
      <Heading as="h2" size="small">
        Workflow Runner
      </Heading>
      <Box xcss={placeholderBoxStyles}>
        <Text color="color.text.subtlest" align="center">
          Select a workflow from the library to run it here. Each step's title and instructions will
          be shown one at a time.
        </Text>
      </Box>
    </Stack>
  </Box>
);

// ─── Root App ─────────────────────────────────────────────────────────────────

const App = () => (
  <Box xcss={pageStyles}>
    <Inline space="space.200" grow="fill" alignBlock="start">
      <WorkflowLibrary />
      <WorkflowRunner />
    </Inline>
  </Box>
);

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
